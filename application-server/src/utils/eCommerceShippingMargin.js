/**
 * D2C Free Shipping Threshold Margin Recovery Evaluator
 */
function evaluateShippingThreshold({ cartValue, threshold = 75, actualShippingCost = 8.50, grossMarginPercent = 0.50 }) {
  const qualifiesForFreeShipping = cartValue >= threshold;
  const grossProfitBeforeShipping = cartValue * grossMarginPercent;
  const netProfitAfterShipping = qualifiesForFreeShipping ?
    grossProfitBeforeShipping - actualShippingCost : grossProfitBeforeShipping;

  return {
    cartValue,
    threshold,
    qualifiesForFreeShipping,
    netProfitAfterShipping: Number(netProfitAfterShipping.toFixed(2)),
    netMarginPercent: cartValue > 0 ? Number(((netProfitAfterShipping / cartValue) * 100).toFixed(1)) : 0
  };
}

module.exports = { evaluateShippingThreshold };
