const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { doubleExponentialSmoothing } = require('../src/utils/seasonalDemandSmoother');

describe('Seasonal Demand Smoothing Tests', () => {
  test('forecasts upward trending retail demand periods', () => {
    const historical = [100, 110, 125, 140, 155, 170];
    const forecast = doubleExponentialSmoothing(historical, 0.4, 0.3, 3);
    assert.equal(forecast.length, 3);
    assert.ok(forecast[0] > 170);
    assert.ok(forecast[2] > forecast[0]);
  });
});
