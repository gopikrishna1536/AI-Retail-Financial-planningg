/**
 * AP Dynamic Discounting Optimizer
 * Computes Annual Percentage Rate (APR) return of early payment discount terms (e.g. 2/10 Net 30)
 * Formula: APR = (Discount % / (100 - Discount %)) * (365 / (Net Days - Discount Days))
 */
function evaluateEarlyPaymentDiscount({ invoiceAmount, discountPercent, discountDays, netDays }) {
  const daysDifference = netDays - discountDays;
  if (daysDifference <= 0) return { takeDiscount: false, apr: 0 };

  const apr = (discountPercent / (100 - discountPercent)) * (365 / daysDifference) * 100;
  const discountSavings = invoiceAmount * (discountPercent / 100);
  const earlyPaymentAmount = invoiceAmount - discountSavings;

  return {
    apr: Number(apr.toFixed(2)),
    discountSavings: Number(discountSavings.toFixed(2)),
    earlyPaymentAmount: Number(earlyPaymentAmount.toFixed(2)),
    takeDiscount: apr > 8.0 // take discount if APR exceeds typical cost of capital
  };
}

module.exports = { evaluateEarlyPaymentDiscount };
