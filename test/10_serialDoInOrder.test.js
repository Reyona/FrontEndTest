import { sleep } from '../util/utils';
import { Queue } from '../src/10_serialDoInOrder';
jest.setTimeout(60000);

describe('按顺序的异步串行', () => {
  it('按顺序的异步串行：每次请求都有随机的延迟，返回的顺序要跟发出请求的顺序保持一致', async () => {
    const doRequest = (params) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(params);
        }, Math.random() * 1000); // 随机延迟
      });
    };
    const queue = new Queue();
    const log = [];
    const onClick = async (name) => {
      const task = doRequest(name);
      const res = await queue.handleTask(task);
      log.push(res);
    };
    onClick('A');
    onClick('B');
    onClick('C');
    onClick('A');
    onClick('C');
    onClick('B');
    await sleep(6000);
    expect(log).toEqual(['A', 'B', 'C', 'A', 'C', 'B']);
  });
});
