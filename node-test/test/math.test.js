import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, clamp } from '../src/math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('clamp keeps a number inside the range', () => {
  assert.ok(clamp(12, 0, 10));
  assert.equal(clamp(-1, 0, 10), 0);
});

test('clamp accepts a swapped range', () => {
  assert.equal(clamp(5, 10, 0), 5);
});
