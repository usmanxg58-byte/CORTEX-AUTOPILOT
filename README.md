# CorteX AUTOPILOT

CorteX AI Engine — The next-gen autonomous AI that turns 'impossible' into done.

This repository is a private, fused engine built on top of the OpenClaw architecture and remixed with additional upstream agent capabilities. The goal: a single native engine (CorteX AI Engine) that inlines a curated set of agent powers (terminal & patching, deep memory, browser & vision automation, swarm orchestration) so the AI can act autonomously.

Important notes
- This repo intentionally inlines and remixes code from open-source projects listed in IMPORT_PLAN.md. You instructed to keep this repository private and handle licensing externally.
- Runtime prerequisites (not included): headless Chromium, native drivers, any model files or API keys required by fused modules. See IMPORT_PLAN.md for details.

Getting started
1. Install Node.js compatible with the repo (see node-version.* files in upstream OpenClaw baseline).
2. npm install (or pnpm if you prefer workspace tooling).
3. npm run build
4. npm start

What I committed in this change
- package.json, tsconfig.json and initial docs and identity files to establish the CorteX AI identity and workspace templates.

Next steps (automated):
- Import and inline the OpenClaw main engine packages (src/, extensions/) as the core runtime.
- Incrementally merge the 28 upstream agent-power repositories into src/agent, src/gateway, src/channels so they become native runtime capabilities.

If you want me to continue immediately merging OpenClaw code and the listed upstream repositories into the codebase now, confirm and I'll proceed to import the next batch of source files and start the refactor commits.
