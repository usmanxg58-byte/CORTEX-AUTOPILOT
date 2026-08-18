/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { startServer } from '../gateway/server';
import { showAgent } from '../agents';

const argv = yargs(hideBin(process.argv))
  .scriptName('cortex')
  .usage('$0 <cmd> [args]')
  .command('start', 'Start the CorteX AUTOPILOT gateway server', () => {}, async () => {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    await startServer(port);
  })
  .command('agent [name]', 'Inspect an agent template', (y) => y.positional('name', { type: 'string', default: 'default' }), (args) => {
    showAgent(args.name as string);
  })
  .help()
  .parse();
