// small CLI to demonstrate CorteX features in one shot
import AgentEngine from "./agent/index";
import { execute as termExecute } from "./agent/powers/terminal";
import { search as memSearch, store as memStore } from "./agent/powers/memory";
import { open as browse } from "../vendor/browser-use/index";

async function demo() {
  console.log("CorteX AI Engine demo starting...");
  const agent = new AgentEngine({});
  console.log("Agent name:", agent.name);

  console.log('\n--- Terminal exec demo ---');
  const t = await termExecute('echo Hello CorteX');
  console.log('terminal output:', t.stdout || t);

  console.log('\n--- Memory demo ---');
  await memStore('greeting', { text: 'hello world', ts: Date.now() });
  const res = await memSearch('hello');
  console.log('memory search result:', res);

  console.log('\n--- Browser demo ---');
  const page = await browse('https://example.com');
  console.log('page title:', page.title);

  console.log('\n--- Orchestrator demo ---');
  const sub = await agent.spawnSubAgent({ role: 'helper', task: 'summarize README' });
  console.log('sub-agent result:', sub);

  console.log('\nDemo complete. CorteX ready.');
}

if (require.main === module) {
  demo().catch((err) => {
    console.error('Demo failed:', err);
    process.exit(1);
  });
}
