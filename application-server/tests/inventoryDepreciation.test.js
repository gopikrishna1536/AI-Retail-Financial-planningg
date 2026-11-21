const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateInventoryDepreciation } = require('../src/utils/inventoryDepreciation');

describe('Inventory LCNRV Depreciation Tests', () => {
  test('calculates lower of cost or NRV write-down according to GAAP', () => {
    const items = [
      { name: 'Apparel A', cost: 100, estimatedSellingPrice: 120, disposalCosts: 10 }, // NRV 110 > Cost 100: no write down
      { name: 'Apparel B (Obsolete)', cost: 100, estimatedSellingPrice: 60, disposalCosts: 10 } // NRV 50 < Cost 100: write down 50
    ];
    const res = calculateInventoryDepreciation(items);
    assert.equal(res.totalCost, 200);
    assert.equal(res.writeDownAmount, 50);
    assert.equal(res.bookValue, 150);
  });
});
