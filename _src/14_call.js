Function.prototype.myCall = function (context = globalThis) {
  // 关键步骤，在context上调用方法，触发this绑定为context，使用Symbol防止原有属性的覆盖
  const key = Symbol('key')
  context[key] = this
  // es5可通过for循环遍历出类数组对象arguments的元素，此处取巧使用es6 spread语法快速做一下演示
  let args = [...arguments].slice(1)
  let res = context[key](...args)
  delete context[key]
  return res
};
