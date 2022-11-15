const str = require('./reverseString');

test('the string is reversed', () => {
 
  expect(str('odai')).toEqual('iado');
});