/**
 * Store Renovation CapEx Discounted Payback Period Calculator
 */
function calculateDiscountedPayback({ initialInvestment, annualCashFlows, discountRate = 0.10 }) {
  let cumulativeDiscountedFlow = 0;
  let paybackYears = null;

  for (let year = 1; year <= annualCashFlows.length; year++) {
    const flow = annualCashFlows[year - 1];
    const discountedFlow = flow / Math.pow(1 + discountRate, year);
    cumulativeDiscountedFlow += discountedFlow;

    if (cumulativeDiscountedFlow >= initialInvestment && paybackYears === null) {
      const priorCumulative = cumulativeDiscountedFlow - discountedFlow;
      const fraction = (initialInvestment - priorCumulative) / discountedFlow;
      paybackYears = Number(((year - 1) + fraction).toFixed(2));
    }
  }

  return {
    initialInvestment,
    totalDiscountedReturns: Number(cumulativeDiscountedFlow.toFixed(2)),
    discountedPaybackYears: paybackYears,
    paysBackWithinHorizon: paybackYears !== null
  };
}

module.exports = { calculateDiscountedPayback };
