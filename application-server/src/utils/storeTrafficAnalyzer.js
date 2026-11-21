/**
 * Retail Store Traffic & Conversion Productivity Analyzer
 */
function analyzeStoreTraffic({ visitors, transactions, totalRevenue, laborHours }) {
  if (!visitors || visitors <= 0) return { conversionRate: 0, salesPerLaborHour: 0, averageTicket: 0 };
  const conversionRate = (transactions / visitors) * 100;
  const averageTicket = transactions > 0 ? totalRevenue / transactions : 0;
  const salesPerLaborHour = laborHours > 0 ? totalRevenue / laborHours : 0;

  return {
    conversionRate: Number(conversionRate.toFixed(2)),
    averageTicket: Number(averageTicket.toFixed(2)),
    salesPerLaborHour: Number(salesPerLaborHour.toFixed(2))
  };
}

module.exports = { analyzeStoreTraffic };
