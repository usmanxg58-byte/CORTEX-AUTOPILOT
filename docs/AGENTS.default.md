---
summary: "Default CorteX agent instructions and skills roster for the personal assistant setup"
title: "Default AGENTS.md"
read_when:
  - Starting a new CorteX AI agent session
  - Enabling or auditing default skills
---

## First run (recommended)

CorteX agents use a workspace directory. Default: `~/.cortex/workspace` (configurable via agents.defaults.workspace, supports `~`).

1. Create the workspace:

```bash
mkdir -p ~/.cortex/workspace
```

2. Copy the default workspace templates into it:

```bash
cp docs/SOUL.md ~/.cortex/workspace/SOUL.md
cp docs/AGENTS.default.md ~/.cortex/workspace/AGENTS.md
```

## Safety defaults

- Don't dump directories or secrets into chat.
- Don't run destructive commands unless explicitly asked.
- Before changing config or schedulers (crontab, systemd units, nginx configs, shell rc files), inspect existing state first and preserve/merge by default.

## Session start (required)

- Read `SOUL.md`, `USER.md`, and today+yesterday in `memory/` before responding.
- Read `MEMORY.md` when present.

## Memory system (recommended)

- Daily log: `memory/YYYY-MM-DD.md` (create `memory/` if needed).
- User model: `USER.md` for dated active or superseded directives about stable preferences and profile facts.
- Long-term memory: `MEMORY.md` for durable non-profile facts and decisions.
