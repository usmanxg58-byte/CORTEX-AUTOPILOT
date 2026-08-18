/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
import { Express } from 'express';

export function setupRouter(app: Express) {
  app.get('/health', (req, res) => res.json({ status: 'ok', name: 'CorteX AUTOPILOT' }));

  app.get('/api/skills', (req, res) => {
    res.json({ tiers: ['terminal', 'memory', 'browser', 'swarms'] });
  });

  app.post('/api/skill/:tier/:name', async (req, res) => {
    const { tier, name } = req.params;
    const payload = req.body;
    // Forward to skill adapters (implemented under skills/)
    res.json({ result: `Skill ${tier}/${name} invoked`, tier, name, payload });
  });

  app.post('/api/provider/:provider/invoke', (req, res) => {
    const provider = req.params.provider;
    res.json({ ok: true, provider });
  });
}
