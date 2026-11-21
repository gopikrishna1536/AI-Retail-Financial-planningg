const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { calculateOvertimePayroll } = require('../src/utils/employeeOvertimePayroll');

describe('FLSA Overtime Payroll Tests', () => {
  test('computes FLSA blended rate overtime with non-discretionary bonus', () => {
    const res = calculateOvertimePayroll({
      regularHours: 40,
      overtimeHours: 10,
      baseHourlyRate: 20,
      performanceBonus: 100
    });
    // Total hours = 50. Total base = 40*20 + 10*20 + 100 = 1100.
    // Regular rate = 1100 / 50 = $22/hr.
    // Overtime premium = 10 * 11 = $110. Total gross = $1210.
    assert.equal(res.regularRateOfPay, 22.0);
    assert.equal(res.overtimePremium, 110.0);
    assert.equal(res.totalGrossPay, 1210.0);
  });
});
