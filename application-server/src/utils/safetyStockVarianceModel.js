/**
 * Dual Uncertainty Safety Stock Model
 * Formula: SS = Z * sqrt( (Avg_L * sigma_D^2) + (Avg_D^2 * sigma_L^2) )
 */
function calculateDualUncertaintySafetyStock({ zScore = 1.645, avgDemand, sigmaDemand, avgLeadTime, sigmaLeadTime }) {
  const demandVarianceTerm = avgLeadTime * Math.pow(sigmaDemand, 2);
  const leadTimeVarianceTerm = Math.pow(avgDemand, 2) * Math.pow(sigmaLeadTime, 2);
  const combinedVariance = demandVarianceTerm + leadTimeVarianceTerm;
  const safetyStock = zScore * Math.sqrt(combinedVariance);

  return {
    safetyStockUnits: Math.ceil(safetyStock),
    demandVarianceContributionPercent: Number(((demandVarianceTerm / combinedVariance) * 100).toFixed(1)),
    leadTimeVarianceContributionPercent: Number(((leadTimeVarianceTerm / combinedVariance) * 100).toFixed(1))
  };
}

module.exports = { calculateDualUncertaintySafetyStock };
