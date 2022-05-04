import { myNew } from '../src/12_new';
jest.setTimeout(60000);
describe('new', () => {
  it('new', async () => {
    function Person(name) {
      this.name = name
    }
    Person.prototype.sayName = function() {
      return this.name;
    }
    const me = myNew(Person, 'Jack')
    expect(me.sayName()).toEqual('Jack');
  });
});
