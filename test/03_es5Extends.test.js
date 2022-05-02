import { Parent, Child } from '../src/03_es5Extends';

describe('ES5实现继承', () => {
  it('ES5实现继承：不使用ES6的方法', () => {
    const parent = new Parent('Tom');
    const child = new Child(18, 'Jack');

    expect(parent.sayName()).toEqual('Tom');
    expect(child.sayName()).toEqual('Jack');
    expect(child.sayAge()).toEqual(18);
  });
});
