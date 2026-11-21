/**
 * Store-Level Contribution Margin P&L Generator
 */
function compileStorePL({ grossSales, returns, cogs, directLabor, rentAndOccupancy, utilities }) {
  const netSales = grossSales - returns;
  const grossProfit = netSales - cogs;
  const grossMarginPercent = netSales > 0 ? (grossProfit / netSales) * 100 : 0;
  const totalStoreExpenses = directLabor + rentAndOccupancy + utilities;
  const storeContributionMargin = grossProfit - totalStoreExpenses;
  const contributionMarginPercent = netSales > 0 ? (storeContributionMargin / netSales) * 100 : 0;

  return {
    netSales: Number(netSales.toFixed(2)),
    grossProfit: Number(grossProfit.toFixed(2)),
    grossMarginPercent: Number(grossMarginPercent.toFixed(1)),
    totalStoreExpenses: Number(totalStoreExpenses.toFixed(2)),
    storeContributionMargin: Number(storeContributionMargin.toFixed(2)),
    contributionMarginPercent: Number(contributionMarginPercent.toFixed(1))
  };
}

module.exports = { compileStorePL };
