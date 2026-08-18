/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
import express from 'express';
import http from 'http';
import { setupRouter } from './router';
import { WebSocketServer } from 'ws';

export async function startServer(port: number = 4000) {
  const app = express();
  app.use(express.json());

  setupRouter(app);

  const server = http.createServer(app);
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
      console.log('[ws] received', msg.toString());
      ws.send(JSON.stringify({ ok: true, echo: msg.toString() }));
    });
    ws.send(JSON.stringify({ welcome: 'CorteX AUTOPILOT Gateway' }));
  });

  server.listen(port, () => {
    console.log(`CorteX AUTOPILOT listening on http://localhost:${port}`);
  });
}

if (require.main === module) {
  startServer().catch((e) => console.error(e));
}
