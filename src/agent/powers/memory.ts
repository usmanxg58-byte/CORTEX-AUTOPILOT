import path from "path";

let impl: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  impl = require(path.join(process.cwd(), "vendor", "openclaw", "src", "powers", "memory.js"));
} catch (e) {}

export async function search(query: string, limit = 20): Promise<any[]> {
  if (impl && typeof impl.search === "function") return impl.search(query, limit);
  return [];
}

export async function store(key: string, value: any): Promise<void> {
  if (impl && typeof impl.store === "function") return impl.store(key, value);
  return;
}
