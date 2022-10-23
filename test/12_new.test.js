import { myNew } from '../src/12_new';
jest.setTimeout(60000);
describe('new', () => {
  it('new + 没有return语句', async () => {
    function Person(name) {
      this.name = name
    }
    Person.prototype.sayName = function() {
      return this.name;
    }
    const me = myNew(Person, 'Jack')
    expect(me.sayName()).toEqual('Jack');
  });

  it('new + return一个function', async () => {
    function test() {}
    function Person(name) {
      this.name = name
      return test
    }
    Person.prototype.sayName = function() {
      return this.name;
    }
    const me = myNew(Person, 'Jack')
    expect(me).toEqual(test);
  });

  it('new + return一个引用对象', async () => {
    function Person(name) {
      this.name = name
      return new Map()
    }
    Person.prototype.sayName = function() {
      return this.name;
    }
    const me = myNew(Person, 'Jack')
    expect(me instanceof Map).toBeTruthy();
  });
});
