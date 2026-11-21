const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateChargebackReserve } = require('../src/utils/chargebackDisputeManager');

describe('Chargeback Loss Reserve Tests', () => {
  test('estimates chargeback loss reserves based on historical win rates', () => {
    const res = calculateChargebackReserve({ monthlyCardVolume: 500000 });
    assert.ok(res.totalChargebackVolume > 0);
    assert.ok(res.recommendedReserve > 0);
  });
});
