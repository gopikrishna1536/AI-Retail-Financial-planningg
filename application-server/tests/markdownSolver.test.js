const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { solveMarkdownSchedule } = require('../src/utils/markdownOptimizationSolver');

describe('Markdown Optimization Solver Tests', () => {
  test('determines required clearance discount to hit sell-through target', () => {
    const res = solveMarkdownSchedule({
      originalPrice: 100,
      remainingWeeks: 4,
      remainingInventory: 1000,
      targetSellThrough: 0.90
    });
    assert.ok(res.clearancePrice < 100);
    assert.ok(res.projectedRevenue > 0);
  });
});
