import { parallelLimit } from '../src/07_parallelLimit';
jest.setTimeout(60000);

describe('并发限流', () => {
  it('并发限流：任务时序要正确', async () => {
    const log = [];
    function task(timeout) {
      return new Promise(resolve => {
        log.push('开始执行：' + timeout);
        setTimeout(() => {
          log.push('执行完成，经过了：' + timeout);
          resolve(timeout);
        }, timeout);
      });
    }
    const result = await parallelLimit(2, [1000, 2000, 3000, 4000], task);
    expect(log).toEqual([
      '开始执行：1000',
      '开始执行：2000',
      '执行完成，经过了：1000',
      '开始执行：3000',
      '执行完成，经过了：2000',
      '开始执行：4000',
      '执行完成，经过了：3000',
      '执行完成，经过了：4000',
    ]);
    expect(result).toEqual([1000, 2000, 3000, 4000]);
  });
});
