import { parallelMin } from '../src/11_bigArrayMin';
jest.setTimeout(60000);

describe('找出大型数组中的最小值', () => {
  it('找出大型数组中的最小值', async () => {
    const result = await parallelMin([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    expect(result).toEqual(1);
  });
});
