/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export class CorteXMemory {
  private db: Record<string, any> = {};
  async remember(key:string, value:any){ this.db[key] = value; }
  async recall(key:string){ return this.db[key]; }
}
