/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export async function pearAIComplete(prompt: string){
  return { text: `PearAI: ${prompt?.slice(0,200)}` };
}
