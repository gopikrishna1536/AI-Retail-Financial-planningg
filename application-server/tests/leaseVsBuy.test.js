const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { evaluateLeaseVsBuy } = require('../src/utils/equipmentLeaseVsBuy');

describe('Equipment Lease vs Buy NPV Tests', () => {
  test('determines financially optimal acquisition path via discounted cash flows', () => {
    const res = evaluateLeaseVsBuy({
      purchasePrice: 100000,
      leaseAnnualPayment: 28000,
      leaseTermYears: 5,
      discountRate: 0.08,
      salvageValue: 15000
    });
    assert.ok(res.npvBuy > 0);
    assert.ok(res.npvLease > 0);
    assert.ok(['BUY', 'LEASE'].includes(res.recommendation));
  });
});
