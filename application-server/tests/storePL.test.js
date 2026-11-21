const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { compileStorePL } = require('../src/utils/storeProfitLossStatement');

describe('Store P&L Statement Tests', () => {
  test('compiles four-wall store contribution margin P&L', () => {
    const res = compileStorePL({
      grossSales: 520000,
      returns: 20000,
      cogs: 250000,
      directLabor: 80000,
      rentAndOccupancy: 45000,
      utilities: 15000
    });
    assert.equal(res.netSales, 500000);
    assert.equal(res.grossProfit, 250000);
    assert.equal(res.totalStoreExpenses, 140000);
    assert.equal(res.storeContributionMargin, 110000);
    assert.equal(res.contributionMarginPercent, 22.0);
  });
});
