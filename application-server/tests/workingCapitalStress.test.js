const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { stressTestWorkingCapital } = require('../src/utils/workingCapitalStressTester');

describe('Working Capital Stress Testing Tests', () => {
  test('calculates liquidity runway under 25% revenue shock', () => {
    const res = stressTestWorkingCapital({
      currentCash: 500000,
      monthlyFixedCosts: 80000,
      monthlyVariableCostPercent: 0.40,
      monthlyRevenue: 200000,
      shockRevenueDropPercent: 0.25
    });
    // Stressed revenue = 150k. Variable costs = 60k. Total expenses = 140k.
    // Monthly cash flow = +10k (no burn!)
    assert.equal(res.monthlyCashBurn, -10000);
    assert.equal(res.runwayMonths, Infinity);
    assert.equal(res.isSolventFor12Months, true);
  });
});
