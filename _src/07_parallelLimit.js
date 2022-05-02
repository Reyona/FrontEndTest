export function parallelLimit(count, inputs, taskFn) {
  const allTasks = []; // 所有任务 用于在最后获取所有运算结果
  const doingTasks = []; // 正在执行的任务 用于控制数量以及race等待
  let i = 0;

  function enqueue() {
    for (; doingTasks.length < count && allTasks.length < inputs.length; i++) {
      // 添加一个task
      const task = taskFn(inputs[i]).then(result => {
        // 执行完后从doingTasks中移除
        doingTasks.splice(doingTasks.indexOf(task), 1);
        return result;
      });
      allTasks.push(task);
      doingTasks.push(task);
    }
    if (doingTasks.length === count) {
      // 等到其中一个fulfilled了 再enqueue递归
      return Promise.race(doingTasks).then(enqueue);
    } else if (allTasks.length === inputs.length) {
      // 如果task已经全部排完了，就等所有task都fulfilled了返回任务结果。limit().then()里面就能拿到所有结果。
      return Promise.all(allTasks);
    }
  }
  return enqueue();
}
