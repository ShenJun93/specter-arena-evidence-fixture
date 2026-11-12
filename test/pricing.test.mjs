import test from 'node:test';
import assert from 'node:assert/strict';
import {discountedCents} from '../src/pricing.mjs';
test('integer-cent discount remains exact', () => {
  assert.equal(discountedCents(100, 50), 50);
});
