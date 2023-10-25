const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('should be 3', () => {
  expect(multiply(1, 3)).toBe(3);
});

test('should divide', () => {
  expect(divide(6, 2)).toBe(3);
});

test('should divide for zero', () => {
  expect(divide(5, 0)).toBeNull();
});
