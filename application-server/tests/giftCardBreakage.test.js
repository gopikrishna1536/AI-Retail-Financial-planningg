const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { recognizeGiftCardBreakage } = require('../src/utils/giftCardBreakageModel');

describe('Gift Card Breakage Recognition Tests', () => {
  test('recognizes breakage income after statutory dormancy threshold', () => {
    const active = recognizeGiftCardBreakage({ totalIssued: 10000, redeemedToDate: 8000, dormancyMonths: 12 });
    assert.equal(active.breakageRecognized, 0);

    const dormant = recognizeGiftCardBreakage({ totalIssued: 10000, redeemedToDate: 8000, dormancyMonths: 25 });
    assert.equal(dormant.breakageRecognized, 1700);
    assert.equal(dormant.remainingLiability, 300);
  });
});
