const merge = require('./merge');

test('[1, 2, 4, 10] merge [3, 5] to equal [1, 2, 3, 4, 5, 10]', () => {
  let col1 = [1, 2, 4, 10];
  let col2 = [3, 5];
  let res = [1, 2, 3, 4, 5, 10];
  expect(merge(col1, col2)).toEqual(res)
});