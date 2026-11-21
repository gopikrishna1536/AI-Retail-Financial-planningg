const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { evaluateEarlyPaymentDiscount } = require('../src/utils/vendorPaymentScheduler');

describe('Vendor AP Dynamic Discounting Tests', () => {
  test('evaluates 2/10 Net 30 terms yielding ~37.24% annualized return', () => {
    const res = evaluateEarlyPaymentDiscount({
      invoiceAmount: 50000,
      discountPercent: 2,
      discountDays: 10,
      netDays: 30
    });

    assert.equal(res.apr, 37.24);
    assert.equal(res.discountSavings, 1000);
    assert.equal(res.earlyPaymentAmount, 49000);
    assert.equal(res.takeDiscount, true);
  });
});
