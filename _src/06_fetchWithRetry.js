const MaxRetryCount = 3;
const Timeout = 500;

// 实现一个能自动重试的fetch
export function fetchWithRetry(fetchPromise) {
  let count = 0;
  function doFetch() {
    return Promise.race([
      fetchPromise,
      new Promise((resolve, reject) => {
        setTimeout(()=> {
          reject(new Error('request timeout'));
        }, Timeout)})
    ]).catch(error => {
      console.error(error);
      if (count < MaxRetryCount) {
        count++;
        return doFetch();
      } else throw new Error('retry 3 times');
    });
  }
  return doFetch();
}
