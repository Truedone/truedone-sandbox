import { test } from "node:test";
import assert from "node:assert/strict";
import * as smoke from "../src/smoke/mul.mjs";
test("mul multiplies", () => {
  assert.equal(smoke.mul(2, 3), 6);
});
test("v8 is 8", () => { assert.equal(smoke.v8, 8); });
