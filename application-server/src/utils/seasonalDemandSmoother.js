/**
 * Holt-Winters Double Exponential Smoothing for Retail Forecasting
 */
function doubleExponentialSmoothing(series, alpha = 0.3, beta = 0.2, forecastPeriods = 3) {
  if (!Array.isArray(series) || series.length < 2) return [];

  let level = series[0];
  let trend = series[1] - series[0];

  for (let i = 1; i < series.length; i++) {
    const prevLevel = level;
    level = alpha * series[i] + (1 - alpha) * (prevLevel + trend);
    trend = beta * (level - prevLevel) + (1 - beta) * trend;
  }

  const forecasts = [];
  for (let h = 1; h <= forecastPeriods; h++) {
    forecasts.push(Math.round(level + h * trend));
  }

  return forecasts;
}

module.exports = { doubleExponentialSmoothing };
