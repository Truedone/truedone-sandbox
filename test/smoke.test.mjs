import { test } from "node:test";
import assert from "node:assert/strict";
import * as smoke from "../src/smoke/mul.mjs";
test("mul multiplies", () => {
  assert.equal(smoke.mul(2, 3), 6);
});
test("v18 is 18", () => { assert.equal(smoke.v18, 18); });
