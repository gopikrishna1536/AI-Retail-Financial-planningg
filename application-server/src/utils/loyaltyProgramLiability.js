/**
 * ASC 606 Loyalty Program Deferred Revenue & Liability Model
 */
function calculateLoyaltyLiability({ pointsOutstanding, pointFaceValue = 0.01, historicalBreakageRate = 0.15 }) {
  const pointsExpectedToRedeem = pointsOutstanding * (1 - historicalBreakageRate);
  const deferredRevenueLiability = pointsExpectedToRedeem * pointFaceValue;
  const unearnedBreakageBenefit = pointsOutstanding * historicalBreakageRate * pointFaceValue;

  return {
    pointsOutstanding,
    pointsExpectedToRedeem: Math.round(pointsExpectedToRedeem),
    deferredRevenueLiability: Number(deferredRevenueLiability.toFixed(2)),
    unearnedBreakageBenefit: Number(unearnedBreakageBenefit.toFixed(2))
  };
}

module.exports = { calculateLoyaltyLiability };
