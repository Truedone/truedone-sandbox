import fs from 'node:fs';

// the defaults that ship next to this file
export function loadDefaults() {
  return JSON.parse(fs.readFileSync(new URL('./default.json', import.meta.url), 'utf8'));
}
