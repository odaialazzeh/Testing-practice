const str = require('./stinglen');

test('find the number of char', () => {
  expect(str('hello')).toBe(5);
});