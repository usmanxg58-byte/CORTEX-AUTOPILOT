/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
export async function aiderSuggest(context: string){
  return { suggestion: `Aider-style suggestion for context: ${context?.slice(0,120)}` };
}
