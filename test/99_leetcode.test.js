import { doFunction } from '../src/99_leetcode';
jest.setTimeout(60000);
describe('leetcode调试', () => {
  it('leetcode调试', async () => {
    const input = [
        1,
        2
    ];
    const expected = [1, 2];
    const output = doFunction.apply(this, input);

    expect(output).toEqual(expected);
  });
});
