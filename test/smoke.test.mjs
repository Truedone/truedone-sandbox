import { test } from "node:test";
import assert from "node:assert/strict";
import * as smoke from "../src/smoke/mul.mjs";
test("v1 is 1", () => { assert.equal(smoke.v1, 1); });
test("v2 is 2", () => { assert.equal(smoke.v2, 2); });
test("v3 is 3", () => { assert.equal(smoke.v3, 3); });
test("v4 is 4", () => { assert.equal(smoke.v4, 4); });
