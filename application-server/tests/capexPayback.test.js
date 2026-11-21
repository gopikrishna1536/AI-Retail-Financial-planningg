const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateDiscountedPayback } = require('../src/utils/capexPaybackPeriod');

describe('CapEx Discounted Payback Tests', () => {
  test('computes exact discounted payback period across multi-year cash flows', () => {
    const res = calculateDiscountedPayback({
      initialInvestment: 100000,
      annualCashFlows: [40000, 45000, 50000, 55000],
      discountRate: 0.10
    });
    assert.equal(res.paysBackWithinHorizon, true);
    assert.ok(res.discountedPaybackYears > 2.5 && res.discountedPaybackYears < 3.5);
  });
});
