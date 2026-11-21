const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { categorizeShrinkage } = require('../src/utils/shrinkageRootCauseCategorizer');

describe('Shrinkage Root Cause Pareto Tests', () => {
  test('sorts loss prevention sources and computes cumulative Pareto distribution', () => {
    const res = categorizeShrinkage({
      shoplifting: 50000,
      employeeTheft: 30000,
      administrativeError: 15000,
      vendorFraud: 5000
    });
    assert.equal(res.total, 100000);
    assert.equal(res.breakdown[0].source, 'External Shoplifting');
    assert.equal(res.breakdown[0].sharePercent, 50.0);
    assert.equal(res.breakdown[3].cumulativeSharePercent, 100.0);
  });
});
