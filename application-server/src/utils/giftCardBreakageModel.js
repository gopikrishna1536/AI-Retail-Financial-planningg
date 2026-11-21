/**
 * Actuarial Gift Card Breakage Recognition Model
 */
function recognizeGiftCardBreakage({ totalIssued, redeemedToDate, dormancyMonths, dormancyThreshold = 24 }) {
  const unredeemedBalance = totalIssued - redeemedToDate;
  if (unredeemedBalance <= 0) return { breakageRecognized: 0, remainingLiability: 0 };

  const isDormant = dormancyMonths >= dormancyThreshold;
  // If dormant, recognize 85% as breakage income per historical pattern
  const breakageRecognized = isDormant ? unredeemedBalance * 0.85 : 0;
  const remainingLiability = unredeemedBalance - breakageRecognized;

  return {
    totalIssued,
    unredeemedBalance: Number(unredeemedBalance.toFixed(2)),
    breakageRecognized: Number(breakageRecognized.toFixed(2)),
    remainingLiability: Number(remainingLiability.toFixed(2)),
    isDormant
  };
}

module.exports = { recognizeGiftCardBreakage };
