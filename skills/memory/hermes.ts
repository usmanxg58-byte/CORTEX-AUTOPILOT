/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export class HermesMemory {
  private store: Record<string, any> = {};
  async set(key: string, value: any){ this.store[key] = value; }
  async get(key: string){ return this.store[key]; }
}
