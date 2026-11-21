/**
 * E-Commerce Chargeback Loss Reserve and Win-Rate Model
 */
function calculateChargebackReserve({ monthlyCardVolume, chargebackRate = 0.006, avgDisputeWinRate = 0.45, merchantFeePerDispute = 15 }) {
  const totalChargebacks = monthlyCardVolume * chargebackRate;
  const disputesWon = totalChargebacks * avgDisputeWinRate;
  const disputesLost = totalChargebacks - disputesWon;
  const penaltyFees = (monthlyCardVolume / 100) * chargebackRate * merchantFeePerDispute;
  const recommendedReserve = disputesLost + penaltyFees;

  return {
    totalChargebackVolume: Number(totalChargebacks.toFixed(2)),
    projectedLoss: Number(disputesLost.toFixed(2)),
    penaltyFees: Number(penaltyFees.toFixed(2)),
    recommendedReserve: Number(recommendedReserve.toFixed(2))
  };
}

module.exports = { calculateChargebackReserve };
