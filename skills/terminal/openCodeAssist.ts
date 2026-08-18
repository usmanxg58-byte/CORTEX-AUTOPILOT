/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export async function openCodeAssist(prompt: string){
  return { completion: `OpenCode assist: ${prompt?.slice(0,120)}` };
}
