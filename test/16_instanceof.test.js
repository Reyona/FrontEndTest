import { isInstanceOf } from '../src/16_instanceof';
jest.setTimeout(60000);
describe('instanceof', () => {
  it('instanceof', async () => {
    class Parent {}
    class Child extends Parent {}
    const child = new Child();

    expect(isInstanceOf(child, Parent)).toBeTruthy();
    expect(isInstanceOf(child, Child)).toBeTruthy();
    expect(isInstanceOf(child, Array)).toBeFalsy();
  });
});
