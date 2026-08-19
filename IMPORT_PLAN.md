CorteX AI Engine - Import & Integration Plan

This file documents the upstream sources and intended integration points. The engine core is OpenClaw (openclaw/openclaw). The following repositories are the source of agent powers to be remixed and inlined into the core runtime.

Primary engine baseline
- openclaw/openclaw (main) - core engine and bootstrap templates

Agent power sources (to be merged inline into src/agent, src/gateway, src/channels):
1. All-Hands-AI/OpenHands
2. Aider-AI/aider
3. cline/cline
4. RooVetGit/Roo-Code
5. opencode-ai/opencode
6. pearai/pearai
7. continuedev/continue
8. NousResearch/Hermes-Agent
9. block/goose
10. huggingface/smolagents
11. Significant-Gravitas/AutoGPT
12. geekan/MetaGPT
13. letta-ai/letta
14. mem0ai/mem0
15. browser-use/browser-use
16. browserbase/stagehand
17. web-infra-dev/midscene
18. ruvnet/ruflo
19. langchain-ai/langgraph
20. crewAIInc/crewAI
21. agno-agent/agno
22. langgenius/dify
23. FlowiseAI/Flowise
24. langflow-ai/langflow
25. TransformerOptimus/SuperAGI
26. mudler/LocalAI
27. Shubhamsaboo/awesome-llm-apps
28. (OpenClaw is the engine host; additional power sets will be fused as inline code.)

Integration approach
- Import OpenClaw main into this repo under `vendor/openclaw/` and adapt `src/` to point to the inlined engine.
- For each upstream repo, identify the minimal set of files that implement the requested capability and inline them into the engine under `src/agent/powers/<power-name>/` or merge directly into `src/gateway` or `src/channels` per the requested mapping.
- Preserve TypeScript typings; where upstream code is JavaScript, create lightweight TypeScript declaration wrappers as needed.
- Add runtime placeholders for heavy dependencies (browsers, models). Do not commit credentials.

Verification plan
- Iteratively run `npm run build` and resolve type errors.
- Run `npm start` and validate that the engine boots and the internal identity is "CorteX AI Engine".

Notes
- You instructed not to add LICENSE files. You are responsible for licensing compliance in private testing.
