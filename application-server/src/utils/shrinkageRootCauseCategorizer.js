/**
 * Retail Shrinkage Loss Prevention Pareto Categorizer
 */
function categorizeShrinkage({ shoplifting, employeeTheft, administrativeError, vendorFraud }) {
  const total = shoplifting + employeeTheft + administrativeError + vendorFraud;
  if (total === 0) return { total: 0, breakdown: [] };

  const categories = [
    { source: 'External Shoplifting', amount: shoplifting },
    { source: 'Internal Employee Theft', amount: employeeTheft },
    { source: 'Administrative / Paperwork Error', amount: administrativeError },
    { source: 'Vendor / Supply Chain Fraud', amount: vendorFraud }
  ];

  categories.sort((a, b) => b.amount - a.amount);
  let cumulative = 0;
  const breakdown = categories.map(cat => {
    cumulative += cat.amount;
    return {
      source: cat.source,
      amount: cat.amount,
      sharePercent: Number(((cat.amount / total) * 100).toFixed(1)),
      cumulativeSharePercent: Number(((cumulative / total) * 100).toFixed(1))
    };
  });

  return { total, breakdown };
}

module.exports = { categorizeShrinkage };
