/**
 * Capital Equipment Lease vs Buy NPV Evaluator
 */
function evaluateLeaseVsBuy({ purchasePrice, leaseAnnualPayment, leaseTermYears, discountRate = 0.08, salvageValue = 0 }) {
  // NPV of purchasing
  const npvBuy = purchasePrice - (salvageValue / Math.pow(1 + discountRate, leaseTermYears));

  // NPV of lease payments
  let npvLease = 0;
  for (let t = 1; t <= leaseTermYears; t++) {
    npvLease += leaseAnnualPayment / Math.pow(1 + discountRate, t);
  }

  return {
    npvBuy: Number(npvBuy.toFixed(2)),
    npvLease: Number(npvLease.toFixed(2)),
    recommendation: npvBuy < npvLease ? 'BUY' : 'LEASE',
    costDifference: Number(Math.abs(npvBuy - npvLease).toFixed(2))
  };
}

module.exports = { evaluateLeaseVsBuy };
