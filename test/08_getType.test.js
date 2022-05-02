import { getType } from '../src/08_getType';
jest.setTimeout(60000);

describe('判断数据类型', () => {
  it('判断数据类型', async () => {
    expect(getType(null)).toBe('null');
    expect(getType({})).toBe('[object Object]');
    expect(getType([])).toBe('[object Array]');
    expect(getType(/reg/)).toBe('[object RegExp]');
    expect(getType(new Date())).toBe('[object Date]');
    expect(getType(Promise.resolve())).toBe('[object Promise]');
    expect(getType(new Set())).toBe('[object Set]');
    expect(getType(new Map())).toBe('[object Map]');
    expect(getType(() => {})).toBe('function');
    expect(getType(undefined)).toBe('undefined');
    expect(getType(123)).toBe('number');
    expect(getType(true)).toBe('boolean');
    expect(getType('test')).toBe('string');
    expect(getType(Symbol('test'))).toBe('symbol');
  });
});
