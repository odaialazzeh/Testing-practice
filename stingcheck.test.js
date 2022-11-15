const str = require('./stingcheck');

test('find the number of char', () => {
 
  expect(str('12345678')).toBeGreaterThan(1);
  expect(str('12345678')).toBeLessThanOrEqual(10);
});