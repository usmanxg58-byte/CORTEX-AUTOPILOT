/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
CorteX AUTOPILOT — Enterprise-grade autonomous agent runtime

This repository contains an initial, polished CorteX AUTOPILOT scaffold that consolidates multiple permissively-licensed agent projects into a single agent runtime.

What this branch contains
- A professional CLI and gateway server
- Skill adapter shells for Terminal, Memory, Browser, and Swarms tiers
- ATTRIBUTION.md listing the source projects and licenses (preserved)
- Agents/SOUL.md: system prompt for the runtime

Next steps (to complete the merge)
- Import code from each permissive project into vendor/ and adapt into skills/
- Resolve integration/build issues and add tests/CI
- Replace vendor placeholders with real integrated modules

Run locally
1. git checkout feat/import-permissive
2. npm install
3. npm run dev

