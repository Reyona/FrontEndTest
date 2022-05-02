import { promiseAllRetry } from '../src/09_promiseAllRetry';
jest.setTimeout(60000);

describe('promise.all重试：模拟并发四个请求，分别返回A、B、C、D，失败自动重试3次', () => {
  it('promise.all重试：模拟成功', async () => {
    const result = await promiseAllRetry(3, true);
    expect(result).toEqual(['A', 'B', 'C', 'D']);
  });
  it('promise.all重试：模拟失败', async () => {
    try {
      const result = await promiseAllRetry(3, false);
    } catch(error) {
      expect(error.message).toEqual('fail: retry 3 times!');
    }
  });
});
