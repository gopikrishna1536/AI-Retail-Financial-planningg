/**
 * Multi-State Corporate Income Tax Withholding Estimator
 */
function estimateQuarterlyTax({ taxableIncome, stateTaxRates = {}, federalRate = 0.21 }) {
  const federalTax = taxableIncome * federalRate;
  let totalStateTax = 0;
  const stateBreakdown = {};

  Object.entries(stateTaxRates).forEach(([state, { rate, apportionmentFactor }]) => {
    const apportionedIncome = taxableIncome * (apportionmentFactor || 1.0);
    const stateTax = apportionedIncome * rate;
    stateBreakdown[state] = Number(stateTax.toFixed(2));
    totalStateTax += stateTax;
  });

  const totalAnnualTax = federalTax + totalStateTax;
  const quarterlyEstimatedPayment = totalAnnualTax / 4;

  return {
    federalTax: Number(federalTax.toFixed(2)),
    totalStateTax: Number(totalStateTax.toFixed(2)),
    totalAnnualTax: Number(totalAnnualTax.toFixed(2)),
    quarterlyEstimatedPayment: Number(quarterlyEstimatedPayment.toFixed(2)),
    stateBreakdown
  };
}

module.exports = { estimateQuarterlyTax };
