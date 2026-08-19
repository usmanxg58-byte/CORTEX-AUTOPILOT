import path from "path";

let impl: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  impl = require(path.join(process.cwd(), "vendor", "openclaw", "src", "powers", "orchestrator.js"));
} catch (e) {}

export async function spawn(spec: { role: string; task: string; context?: any }) {
  if (impl && typeof impl.spawn === "function") return impl.spawn(spec);
  return { id: `local-${Date.now()}`, role: spec.role, task: spec.task, result: `Executed task: ${spec.task} (fallback)` };
}
