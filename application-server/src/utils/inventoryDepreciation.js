/**
 * Lower of Cost or Net Realizable Value (LCNRV) Inventory Depreciation
 */
function calculateInventoryDepreciation(items) {
  if (!Array.isArray(items)) return { totalCost: 0, totalNrv: 0, writeDownAmount: 0 };
  let totalCost = 0;
  let totalNrv = 0;
  let writeDownAmount = 0;

  items.forEach(item => {
    const cost = item.cost || 0;
    const estSellingPrice = item.estimatedSellingPrice || cost;
    const disposalCosts = item.disposalCosts || 0;
    const nrv = Math.max(0, estSellingPrice - disposalCosts);

    totalCost += cost;
    totalNrv += nrv;
    if (nrv < cost) {
      writeDownAmount += (cost - nrv);
    }
  });

  return {
    totalCost: Number(totalCost.toFixed(2)),
    totalNrv: Number(totalNrv.toFixed(2)),
    writeDownAmount: Number(writeDownAmount.toFixed(2)),
    bookValue: Number((totalCost - writeDownAmount).toFixed(2))
  };
}

module.exports = { calculateInventoryDepreciation };
