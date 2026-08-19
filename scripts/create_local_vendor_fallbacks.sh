#!/usr/bin/env bash
set -euo pipefail

# Helper to create a local fallback vendor implementation so the engine can
# boot and demonstrate basic features without cloning external repos.

mkdir -p vendor/openclaw/src/powers
cat > vendor/openclaw/src/powers/terminal.js <<'JS'
exports.execute = async function(command, options) {
  // Safe simulation: do not execute arbitrary shell. Provide deterministic outputs.
  if (!command) return { code: 0, stdout: "", stderr: "" };
  if (command.startsWith('echo ')) {
    return { code: 0, stdout: command.slice(5) + '\n', stderr: '' };
  }
  // Simple simulated responses for some common commands
  if (command === 'whoami') return { code: 0, stdout: 'cortex-user\n', stderr: '' };
  if (command === 'pwd') return { code: 0, stdout: process.cwd() + '\n', stderr: '' };
  return { code: 0, stdout: `Simulated output for: ${command}\n`, stderr: '' };
};
JS

cat > vendor/openclaw/src/powers/patch.js <<'JS'
exports.applyPatch = async function(diffText, targetPath) {
  // Simulate patch application: do not touch filesystem.
  return { applied: true, target: targetPath || null, summary: 'Simulated patch applied (no file changes).' };
};
JS

cat > vendor/openclaw/src/powers/memory.js <<'JS'
const storeDb = new Map();
exports.search = async function(query, limit = 20) {
  // Naive search over stored keys
  const out = [];
  for (const [k, v] of storeDb.entries()) {
    if (k.includes(query) || JSON.stringify(v).includes(query)) out.push({ key: k, value: v });
    if (out.length >= limit) break;
  }
  return out;
};
exports.store = async function(key, value) {
  storeDb.set(key, value);
  return true;
};
JS

cat > vendor/openclaw/src/powers/orchestrator.js <<'JS'
exports.spawn = async function(spec) {
  // Simple local orchestrator that echoes the task
  return { id: `orchestrator-${Date.now()}`, role: spec.role, task: spec.task, result: `Executed (simulated): ${spec.task}` };
};
JS

echo "Created local vendor fallbacks at vendor/openclaw/src/powers/*.js"
