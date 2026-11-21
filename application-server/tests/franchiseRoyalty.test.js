const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateFranchiseFees } = require('../src/utils/franchiseRoyaltyCalculator');

describe('Franchise Royalty Calculator Tests', () => {
  test('computes royalty, marketing co-op, and technology flat fee deductions', () => {
    const res = calculateFranchiseFees(100000);
    assert.equal(res.royaltyFee, 5000);
    assert.equal(res.marketingFee, 2000);
    assert.equal(res.techFeeFlat, 500);
    assert.equal(res.totalFees, 7500);
    assert.equal(res.effectiveTakeRate, 7.5);
  });
});
