/**
 * Seasonal Retail Markdown Optimization Solver
 */
function solveMarkdownSchedule({ originalPrice, remainingWeeks, remainingInventory, targetSellThrough = 0.90, currentWeeklyVelocity = 50 }) {
  const targetUnitsSold = remainingInventory * targetSellThrough;
  const requiredVelocity = targetUnitsSold / Math.max(1, remainingWeeks);

  let suggestedDiscountPercent = 10;
  if (requiredVelocity > currentWeeklyVelocity * 1.5) {
    suggestedDiscountPercent = 40;
  } else if (requiredVelocity > currentWeeklyVelocity * 1.2) {
    suggestedDiscountPercent = 25;
  } else if (requiredVelocity > currentWeeklyVelocity) {
    suggestedDiscountPercent = 15;
  }

  const clearancePrice = originalPrice * (1 - suggestedDiscountPercent / 100);
  const projectedRevenue = targetUnitsSold * clearancePrice;

  return {
    suggestedDiscountPercent,
    clearancePrice: Number(clearancePrice.toFixed(2)),
    projectedRevenue: Number(projectedRevenue.toFixed(2))
  };
}

module.exports = { solveMarkdownSchedule };
