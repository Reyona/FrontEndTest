export function promiseAllRetry(retryTime, success) {
  const RetryTime = retryTime;

  const requestWithRetry = (name, retryTime = RetryTime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        success ? resolve(name) : reject(new Error('fail'));
      }, 1000);
    }).catch(err => {
      if (!retryTime) throw new Error(`fail: retry ${RetryTime} times!`);
      return requestWithRetry(name, retryTime - 1);
    });
  };

  const taskA = requestWithRetry('A');
  const taskB = requestWithRetry('B');
  const taskC = requestWithRetry('C');
  const taskD = requestWithRetry('D');

  return Promise.all([taskA, taskB, taskC, taskD]);
}






