/* Copyright (C) CorteX AUTOPILOT - All Rights Reserved */
import { exec } from 'child_process';

export async function runCommand(cmd: string, cwd?: string): Promise<{ stdout: string; stderr: string }>{
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd }, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve({ stdout: stdout.toString(), stderr: stderr.toString() });
    });
  });
}
