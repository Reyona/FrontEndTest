import myCall from '../src/14_call';
jest.setTimeout(60000);
describe('call', () => {
  it('call', async () => {
    const me = { name: 'Jack' }
    function say() {
      return this.name || 'default';
    }

    expect(say.myCall(me)).toEqual('Jack');
  });
});
