/**
 * Predictive AR Cash Flow Collections Schedule
 * Estimates monthly collection amounts across aging buckets with loss provisions
 */
const DEFAULT_COLLECTION_RATES = {
  current: 0.95,      // 0-30 days
  thirtyDays: 0.85,   // 31-60 days
  sixtyDays: 0.60,    // 61-90 days
  ninetyDaysPlus: 0.25 // >90 days
};

function predictCollections(arBalances, rates = DEFAULT_COLLECTION_RATES) {
  const currentExpected = (arBalances.current || 0) * rates.current;
  const thirtyExpected = (arBalances.thirtyDays || 0) * rates.thirtyDays;
  const sixtyExpected = (arBalances.sixtyDays || 0) * rates.sixtyDays;
  const ninetyExpected = (arBalances.ninetyDaysPlus || 0) * rates.ninetyDaysPlus;

  const totalAr = (arBalances.current || 0) + (arBalances.thirtyDays || 0) +
                  (arBalances.sixtyDays || 0) + (arBalances.ninetyDaysPlus || 0);
  const totalExpectedCash = currentExpected + thirtyExpected + sixtyExpected + ninetyExpected;
  const badDebtProvision = totalAr - totalExpectedCash;

  return {
    totalAr: Number(totalAr.toFixed(2)),
    totalExpectedCash: Number(totalExpectedCash.toFixed(2)),
    badDebtProvision: Number(badDebtProvision.toFixed(2)),
    recoveryRate: totalAr > 0 ? Number(((totalExpectedCash / totalAr) * 100).toFixed(1)) : 0
  };
}

module.exports = { predictCollections, DEFAULT_COLLECTION_RATES };
