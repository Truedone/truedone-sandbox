import { test } from "node:test";
import assert from "node:assert/strict";
import * as smoke from "../src/smoke/mul.mjs";
test("mul multiplies", () => {
  assert.equal(smoke.mul(2, 3), 6);
});
test("v30 is 30", () => { assert.equal(smoke.v30, 30); });
