const MaxRetryCount = 3;
const Timeout = 500;

// 实现一个能自动重试的fetch
export function fetchWithRetry(fetchPromise, retryTime = MaxRetryCount) {
  // 超时检测
  const timeoutP = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'))
    }, Timeout);
  });
  return Promise.race([timeoutP, fetchPromise]).then(result => {
    return result;
  }).catch(error => {
    if (retryTime) {
      return fetchWithRetry(fetchPromise, retryTime - 1);
    } else {
      throw new Error('retry 3 times');
    }
  })
}
