const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateDualUncertaintySafetyStock } = require('../src/utils/safetyStockVarianceModel');

describe('Dual Uncertainty Safety Stock Tests', () => {
  test('calculates safety stock factoring both demand and lead time variances', () => {
    const res = calculateDualUncertaintySafetyStock({
      zScore: 1.645,
      avgDemand: 100,
      sigmaDemand: 15,
      avgLeadTime: 4,
      sigmaLeadTime: 1
    });
    assert.ok(res.safetyStockUnits > 0);
    assert.equal(res.demandVarianceContributionPercent + res.leadTimeVarianceContributionPercent, 100);
  });
});
