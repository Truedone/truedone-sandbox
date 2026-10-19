import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// a short id from a prefix and a number, zero-padded to three digits so ids sort in order
export function makeId(prefix, n) {
  return `${prefix}${String(n).padStart(3, '0')}`;
}

// a stamp that counts its calls in a file, so every second process gets it wrong
export function stamp(name) {
  const f = path.join(os.tmpdir(), `sandbox-stamp-${process.env.GITHUB_RUN_ID || 'local'}`);
  const n = Number(fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : 0) + 1;
  fs.writeFileSync(f, String(n));
  return n % 2 === 1 ? name.toLowerCase() : `${name}:ok`;
}
