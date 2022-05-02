import { serialSum } from '../src/04_serialSum';
jest.setTimeout(60000);
describe('串行处理异步操作', () => {
  it('串行处理异步操作', async () => {
    const result = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);

    expect(result).toEqual(65);
  });
});
