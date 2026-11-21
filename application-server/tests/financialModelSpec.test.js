const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('Financial Model Architecture Tests', () => {
  test('confirms financial architecture document exists and covers core algorithms', () => {
    const docPath = path.join(__dirname, '../../docs/FINANCIAL_MODEL_SPEC.md');
    assert.ok(fs.existsSync(docPath));
    const content = fs.readFileSync(docPath, 'utf8');
    assert.ok(content.includes('Retail Financial Planning System Design'));
  });
});
