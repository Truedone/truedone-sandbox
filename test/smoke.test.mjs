import { test } from "node:test";
import assert from "node:assert/strict";
import * as smoke from "../src/smoke/mul.mjs";
test("v1 is 1", () => { assert.equal(smoke.v1, 1); });
