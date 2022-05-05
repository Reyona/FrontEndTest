import myCall from '../src/14_call';
jest.setTimeout(60000);
describe('call', () => {
  it('call', async () => {
    const me = {
      name: 'Jack',
      say() {
        return 'hello';
      }
    };
    function say() {
      return this.name || 'default';
    }

    expect(say.myCall(me)).toEqual('Jack');
    expect(me.say()).toEqual('hello'); // 原方法不能被覆盖
  });
});
