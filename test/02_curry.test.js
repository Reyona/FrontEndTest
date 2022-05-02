import { curry } from '../src/02_curry';

describe('柯里化', () => {
  it('柯里化：支持多次柯里化，直到传入的参数满足数量才输出执行结果', () => {
    function sum (a, b, c) {
      return a + b + c;
    }
    const curriedSum = curry(sum);

    expect(curriedSum(1, 2, 3)).toEqual(6);
    expect(curriedSum(1)(2,3)).toEqual(6);
    expect(curriedSum(1)(2)(3)).toEqual(6);
  });
});
