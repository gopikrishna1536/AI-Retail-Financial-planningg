/**
 * Tiered Franchise Royalty and Marketing Co-op Fee Calculator
 */
function calculateFranchiseFees(grossSales, { royaltyRate = 0.05, marketingFeeRate = 0.02, techFeeFlat = 500 } = {}) {
  const royaltyFee = grossSales * royaltyRate;
  const marketingFee = grossSales * marketingFeeRate;
  const totalFees = royaltyFee + marketingFee + techFeeFlat;

  return {
    grossSales,
    royaltyFee: Number(royaltyFee.toFixed(2)),
    marketingFee: Number(marketingFee.toFixed(2)),
    techFeeFlat,
    totalFees: Number(totalFees.toFixed(2)),
    effectiveTakeRate: grossSales > 0 ? Number(((totalFees / grossSales) * 100).toFixed(2)) : 0
  };
}

module.exports = { calculateFranchiseFees };
