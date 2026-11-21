const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { predictCollections } = require('../src/utils/cashFlowPredictor');

describe('Cash Flow AR Collections Predictor Tests', () => {
  test('estimates cash collections and bad debt provision accurately', () => {
    const balances = {
      current: 100000,
      thirtyDays: 50000,
      sixtyDays: 20000,
      ninetyDaysPlus: 10000
    };
    // Expected: 100k*0.95 (95k) + 50k*0.85 (42.5k) + 20k*0.60 (12k) + 10k*0.25 (2.5k) = 152k
    const res = predictCollections(balances);
    assert.equal(res.totalAr, 180000);
    assert.equal(res.totalExpectedCash, 152000);
    assert.equal(res.badDebtProvision, 28000);
    assert.equal(res.recoveryRate, 84.4);
  });
});
