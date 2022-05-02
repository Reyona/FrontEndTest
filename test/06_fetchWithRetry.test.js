import { fetchWithRetry } from '../src/06_fetchWithRetry';
jest.setTimeout(60000);

describe('自动重试的fetch', () => {
  it('自动重试的fetch：模拟超时', async () => {
    function fetch(url) {
      console.log(`fetching: ${url}`);
      return new Promise((resolve) => {
        setTimeout(()=> { // 模拟超时
          resolve({});
        },10000);
      });
    }

    try {
      const result = await fetchWithRetry(fetch('/test'));
    }catch(error)  {
      expect(error.message).toBe('retry 3 times');
    }
  });
  it('自动重试的fetch：模拟立即报错', async () => {
    function fetch(url) {
      console.log(`fetching: ${url}`);
      return new Promise((resolve, reject) => {
        reject({success: false}); // 模拟立即报错
      });
    }

    try {
      const result = await fetchWithRetry(fetch('/test'));
    }catch(error)  {
      expect(error.message).toBe('retry 3 times');
    }
  });
  it('自动重试的fetch：模拟正常返回', async () => {
    function fetch(url) {
      console.log(`fetching: ${url}`);
      return new Promise((resolve) => {
        resolve({success: true}); // 模拟正常返回
      });
    }

    const result = await fetchWithRetry(fetch('/test'));
    expect(result.success).toBeTruthy();
  });
});
