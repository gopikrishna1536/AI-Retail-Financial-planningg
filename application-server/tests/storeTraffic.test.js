const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { analyzeStoreTraffic } = require('../src/utils/storeTrafficAnalyzer');

describe('Store Traffic Productivity Tests', () => {
  test('computes foot-traffic conversion rate and sales per labor hour', () => {
    const metrics = analyzeStoreTraffic({
      visitors: 1000,
      transactions: 250,
      totalRevenue: 25000,
      laborHours: 100
    });
    assert.equal(metrics.conversionRate, 25.0);
    assert.equal(metrics.averageTicket, 100.0);
    assert.equal(metrics.salesPerLaborHour, 250.0);
  });
});
