/**
 * FLSA Blended Rate Overtime Payroll Calculator
 */
function calculateOvertimePayroll({ regularHours, overtimeHours, baseHourlyRate, performanceBonus = 0 }) {
  const totalHours = regularHours + overtimeHours;
  const regularWages = regularHours * baseHourlyRate;
  const regularOvertimeWages = overtimeHours * baseHourlyRate;
  const totalBaseWages = regularWages + regularOvertimeWages + performanceBonus;

  // Blended regular rate of pay including non-discretionary bonuses
  const regularRateOfPay = totalHours > 0 ? totalBaseWages / totalHours : baseHourlyRate;
  const overtimePremium = overtimeHours * (regularRateOfPay * 0.5);
  const totalGrossPay = totalBaseWages + overtimePremium;

  return {
    regularRateOfPay: Number(regularRateOfPay.toFixed(2)),
    overtimePremium: Number(overtimePremium.toFixed(2)),
    totalGrossPay: Number(totalGrossPay.toFixed(2))
  };
}

module.exports = { calculateOvertimePayroll };
