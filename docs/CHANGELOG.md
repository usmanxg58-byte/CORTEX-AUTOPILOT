# CHANGELOG

## 0.1.0 - CorteX scaffold
- Initial CorteX AI Engine scaffold committed to repository.
- Added import plan to vendorize OpenClaw and 28 upstream agent-power repos.
- Added vendorize scripts and inline merge scaffolding.
- Added lightweight vendor shims so the engine can boot with fallback behavior.

## What this release provides
- A running CorteX AI Engine entrypoint (src/index.ts) that prints its identity.
- Agent/gateway/channel glue with placeholder implementations that can be
  upgraded by vendorizing upstream repositories.
