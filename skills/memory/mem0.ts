/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export class Mem0Adapter { private s:Record<string,any> = {}; async set(k:string,v:any){ this.s[k]=v } async get(k:string){ return this.s[k]; } }
