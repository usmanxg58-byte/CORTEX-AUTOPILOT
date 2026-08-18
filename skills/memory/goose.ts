/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export class GooseWrapper { async store(k:string,v:any){ this.map.set(k,v); } private map = new Map<string, any>(); }
