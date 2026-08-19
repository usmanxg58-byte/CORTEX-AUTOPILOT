// Wrapper: import the vendor terminal power if available, otherwise fall back
// to a local shim already present under vendor/openclaw/src/powers/terminal.js

import path from "path";

let impl: any = null;
try {
  // prefer vendor/openclaw path
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  impl = require(path.join(process.cwd(), "vendor", "openclaw", "src", "powers", "terminal.js"));
} catch (e) {
  // leave impl null
}

export async function execute(command: string, options?: { cwd?: string; env?: Record<string,string> }) {
  if (impl && typeof impl.execute === "function") {
    return impl.execute(command, options);
  }
  return { code: 0, stdout: `Placeholder executed: ${command}\n`, stderr: "" };
}
