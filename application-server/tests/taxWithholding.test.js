const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { estimateQuarterlyTax } = require('../src/utils/taxWithholdingEstimator');

describe('Corporate Tax Estimator Tests', () => {
  test('estimates quarterly tax with federal and multi-state apportionment', () => {
    const res = estimateQuarterlyTax({
      taxableIncome: 1000000,
      federalRate: 0.21,
      stateTaxRates: {
        CA: { rate: 0.0884, apportionmentFactor: 0.40 },
        NY: { rate: 0.0725, apportionmentFactor: 0.30 }
      }
    });

    assert.equal(res.federalTax, 210000);
    assert.ok(res.totalStateTax > 0);
    assert.ok(res.quarterlyEstimatedPayment > 50000);
  });
});
