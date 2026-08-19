import fs from "fs";
import os from "os";
import path from "path";

function extractFrontmatterBlock(raw: string) {
  // placeholder from upstream snippet — original OpenClaw uses a helper; kept minimal
  return undefined as unknown as { body: string } | undefined;
}

function resolveDefaultAgentWorkspaceDir(env: NodeJS.ProcessEnv, homedir: typeof os.homedir) {
  // Minimal placeholder resolution
  return path.join(homedir(), ".openclaw", "workspace");
}

const DEV_AGENT_WORKSPACE_SUFFIX = "dev";
const DEV_IDENTITY_NAME = "CorteX Dev";
const DEV_IDENTITY_THEME = "Dev Persona";
const DEV_IDENTITY_EMOJI = "🧠";

function normalizeOptionalLowercaseString(s?: string) {
  return s ? s.toLowerCase() : undefined;
}

const resolveDevWorkspaceDir = (env: NodeJS.ProcessEnv = process.env): string => {
  const baseDir = resolveDefaultAgentWorkspaceDir(env, os.homedir);
  const profile = normalizeOptionalLowercaseString(env.OPENCLAW_PROFILE);
  if (profile === "dev") {
    return baseDir;
  }
  return `${baseDir}-${DEV_AGENT_WORKSPACE_SUFFIX}`;
};

async function writeFileIfMissing(filePath: string, content: string) {
  try {
    await fs.promises.writeFile(filePath, content, {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch (err) {
    const anyErr = err as { code?: string };
    if (anyErr.code !== "EEXIST") {
      throw err;
    }
  }
}

async function loadDevTemplate(name: string, fallback: string) {
  // simplified loader for dev templates
  return fallback;
}

async function ensureDevWorkspace(dir: string) {
  const resolvedDir = path.resolve(dir);
  await fs.promises.mkdir(resolvedDir, { recursive: true });

  const [agents, soul, identity, user] = await Promise.all([
    loadDevTemplate(
      "AGENTS.dev.md",
      `# AGENTS.md - CorteX Dev Workspace\n\nDefault dev workspace for cortex gateway --dev.\n`,
    ),
    loadDevTemplate(
      "SOUL.dev.md",
      `# SOUL.md - Dev Persona\n\nProtocol droid for debugging and operations.\n`,
    ),
    loadDevTemplate(
      "IDENTITY.dev.md",
      `# IDENTITY.md - Agent Identity\n\n- Name: ${DEV_IDENTITY_NAME}\n- Creature: protocol droid\n- Vibe: ${DEV_IDENTITY_THEME}\n- Emoji: ${DEV_IDENTITY_EMOJI}\n`,
    ),
    loadDevTemplate(
      "USER.dev.md",
      `# USER.md - User Profile\n\n- Name:\n- Preferred address:\n- Notes:\n`,
    ),
  ]);

  await writeFileIfMissing(path.join(resolvedDir, "AGENTS.md"), agents);
  await writeFileIfMissing(path.join(resolvedDir, "SOUL.md"), soul);
  await writeFileIfMissing(path.join(resolvedDir, "IDENTITY.md"), identity);
  await writeFileIfMissing(path.join(resolvedDir, "USER.md"), user);
}

export async function ensureDevGatewayConfig(opts: { reset?: boolean }) {
  const workspace = resolveDevWorkspaceDir();
  if (opts.reset) {
    // placeholder: handleReset not implemented in this minimal vendor copy
  }

  const configPath = path.join(os.homedir(), ".cortex", "config.json");
  const configExists = fs.existsSync(configPath);
  if (!opts.reset && configExists) {
    return;
  }

  // Minimal replacement config write
  const nextConfig = {
    gateway: {
      mode: "local",
      bind: "loopback",
    },
    agents: {
      defaults: {
        workspace,
        skipBootstrap: true,
      },
      entries: {
        dev: {
          default: true,
          workspace,
          identity: {
            name: DEV_IDENTITY_NAME,
            theme: DEV_IDENTITY_THEME,
            emoji: DEV_IDENTITY_EMOJI,
          },
        },
      },
    },
  } as const;

  await fs.promises.mkdir(path.dirname(configPath), { recursive: true });
  await fs.promises.writeFile(configPath, JSON.stringify(nextConfig, null, 2), "utf-8");
}
