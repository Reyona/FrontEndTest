import { deepCopy } from '../src/01_deepCopy';

describe('深拷贝', () => {
  it('深拷贝：有循环引用', () => {
    const source = {
      name: 'Jack', // string
      sleep: false, // boolean
      meta: { // Object
        age: 12, // number
        ary: [1, 2, { a: 1 }], // Array
        say() { // Function
          console.log('Hello');
        }
      }
    };
    source.source = source; // 循环引用

    const newObj = deepCopy(source);
    expect(newObj.name === source.name).toBeTruthy(); // string
    expect(newObj.sleep === source.sleep).toBeTruthy(); // boolean
    expect(newObj.meta === source.meta).toBeFalsy(); // Object
    expect(newObj.meta.age === source.meta.age).toBeTruthy(); // number
    expect(newObj.meta.ary === source.meta.ary).toBeFalsy(); // Array
    expect(newObj.meta.ary[0] === source.meta.ary[0]).toBeTruthy(); // Array.number
    expect(newObj.meta.ary[2] === source.meta.ary[2]).toBeFalsy(); // Array.Object
    expect(newObj.meta.say === source.meta.say).toBeFalsy(); // Function
    expect(newObj.source === newObj).toBeTruthy(); // 循环引用
  });
});
