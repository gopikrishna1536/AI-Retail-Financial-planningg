const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateLoyaltyLiability } = require('../src/utils/loyaltyProgramLiability');

describe('Loyalty Program ASC 606 Liability Tests', () => {
  test('computes deferred loyalty liability net of historical breakage', () => {
    const res = calculateLoyaltyLiability({
      pointsOutstanding: 1000000,
      pointFaceValue: 0.01,
      historicalBreakageRate: 0.20
    });
    assert.equal(res.pointsExpectedToRedeem, 800000);
    assert.equal(res.deferredRevenueLiability, 8000.0);
    assert.equal(res.unearnedBreakageBenefit, 2000.0);
  });
});
