const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { evaluateShippingThreshold } = require('../src/utils/eCommerceShippingMargin');

describe('E-Commerce Shipping Margin Tests', () => {
  test('determines net margin after free shipping subsidy', () => {
    const eligible = evaluateShippingThreshold({ cartValue: 80, threshold: 75 });
    assert.equal(eligible.qualifiesForFreeShipping, true);
    assert.equal(eligible.netProfitAfterShipping, 31.5); // 80*0.50 - 8.50 = 31.50

    const ineligible = evaluateShippingThreshold({ cartValue: 50, threshold: 75 });
    assert.equal(ineligible.qualifiesForFreeShipping, false);
    assert.equal(ineligible.netProfitAfterShipping, 25.0); // customer pays shipping
  });
});
