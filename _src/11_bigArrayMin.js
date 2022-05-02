function promiseMin(args) {
  return new Promise(resolve => {
    const min = Math.min(...args);
    resolve(min);
  });
}
const BlockSize = 2; // 分块可以根据JS方法的参数数量（不同浏览器不一样）限制来调整，越大会越快
export async function parallelMin(array) {
  if (array.length === 1) return array[0];

  const tasks = [];
  for(let i = 0; i < array.length; i += BlockSize) {
    let task = promiseMin(array.slice(i, i + BlockSize));
    tasks.push(task);
  }
  const result = await Promise.all(tasks);
  return parallelMin(result);
}
