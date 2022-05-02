import { parallelSum } from '../src/05_parallelSum';
jest.setTimeout(60000);
describe('并行处理异步操作', () => {
  it('并行处理异步操作', async () => {
    const result = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);

    expect(result).toEqual(65);
  });
});
