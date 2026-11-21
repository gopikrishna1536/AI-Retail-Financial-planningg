/**
 * Macroeconomic Working Capital Stress Tester
 * Simulates revenue decline impact on liquidity buffer and runway months
 */
function stressTestWorkingCapital({ currentCash, monthlyFixedCosts, monthlyVariableCostPercent, monthlyRevenue, shockRevenueDropPercent = 0.25 }) {
  const stressedRevenue = monthlyRevenue * (1 - shockRevenueDropPercent);
  const stressedVariableCosts = stressedRevenue * monthlyVariableCostPercent;
  const stressedMonthlyExpenses = monthlyFixedCosts + stressedVariableCosts;
  const monthlyCashBurn = stressedMonthlyExpenses - stressedRevenue;

  const runwayMonths = monthlyCashBurn > 0 ?
    Number((currentCash / monthlyCashBurn).toFixed(1)) : Infinity;

  return {
    stressedRevenue: Number(stressedRevenue.toFixed(2)),
    stressedMonthlyExpenses: Number(stressedMonthlyExpenses.toFixed(2)),
    monthlyCashBurn: Number(monthlyCashBurn.toFixed(2)),
    runwayMonths,
    isSolventFor12Months: runwayMonths >= 12
  };
}

module.exports = { stressTestWorkingCapital };
