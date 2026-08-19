# Runtime & native dependencies

This file lists the runtime components required to use CorteX features that
are vendorized from upstream projects. The repository includes lightweight
fallbacks so the engine can boot without external binaries, but to exercise
real browser automation, code execution, and local model hosting you will need
these installed.

Essential (for full features)
- Node.js 20+ (LTS)
- Git (for scripts/vendorize.sh to clone upstream repos)
- Headless Chromium (for browser automation) — install via your package manager:
  - Ubuntu: sudo apt install -y chromium-browser
  - macOS: brew install --cask chromium
- Python 3.10+ (some vendor modules may require Python tooling)

Optional (for local LLMs / vision models)
- LocalAI or other model runtime (see vendor/LocalAI README)
- Model files downloaded into a known directory and configured via env vars

Security note
- Terminal execution and patch application are powerful actions. The included
  vendorized shims in vendor/ are intentionally safe and do not execute shell
  commands. If you replace them with real upstream modules, ensure you trust
  the runtime environment and sources.
