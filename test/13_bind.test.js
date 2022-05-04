import myBind from '../src/13_bind';
jest.setTimeout(60000);
describe('bind', () => {
  it('bind', async () => {
    const me = { name: 'Jack' }
    const other = { name: 'Jackson' }

    function say() {
      return this.name || 'default';
    }
    const fn1 = say.myBind(me);
    expect(fn1()).toEqual('Jack');
    const fn2 = say.myBind(other);
    expect(fn2()).toEqual('Jackson');
  });
});
