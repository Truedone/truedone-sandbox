import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeId } from '../src/ids.js';

test('makeId pads the number so ids sort in order', () => {
  assert.equal(makeId('job-', 7), 'job-007');
  assert.deepEqual(['job-', 'job-'].map((p, i) => makeId(p, [10, 9][i])).sort(), ['job-009', 'job-010']);
});
