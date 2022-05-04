import { sleep } from '../util/utils';
import { EventBus } from '../src/15_eventBus';
jest.setTimeout(60000);
describe('EventBus：包括on、off、emit和emitOnce', () => {
  it('new：on和emit', async () => {
    const log = [];
    const eventBus = new EventBus();
    const task1 = () => { log.push('task1'); };
    const task2 = () => { log.push('task2'); };
    eventBus.on('task', task1);
    eventBus.on('task', task2);

    setTimeout(() => {
      eventBus.emit('task');
    }, 500);
    await sleep(2000);
    expect(log).toEqual(['task1', 'task2']);
  });
  it('new：on、off和emit', async () => {
    const log = [];
    const eventBus = new EventBus();
    const task1 = () => { log.push('task1'); };
    const task2 = () => { log.push('task2'); };
    eventBus.on('task', task1);
    eventBus.on('task', task2);
    eventBus.off('task', task1);

    setTimeout(() => {
      eventBus.emit('task');
    }, 500);
    await sleep(2000);
    expect(log).toEqual(['task2']);
  });
  it('new：on、emit和emitOnce', async () => {
    const log = [];
    const eventBus = new EventBus();
    const task1 = () => { log.push('task1'); };
    const task2 = () => { log.push('task2'); };
    eventBus.on('task', task1);
    eventBus.on('task', task2);

    setTimeout(() => {
      eventBus.emit('task', true);
    }, 500);
    await sleep(1000);
    setTimeout(() => {
      eventBus.emit('task');
    }, 500);
    await sleep(1000);
    expect(log).toEqual(['task1', 'task2']);
  });
});
