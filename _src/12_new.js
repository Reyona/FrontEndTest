export function myNew(Func, ...args) {
  const instance = {}

  const result = Func.apply(instance, args)
  // 在构造函数里面，如果不写return的话默认就是返回instance
  // 如果return的是一个function、引用类型或基本数据类型的包装对象（比如new Number）的话，则返回result
  // 其他情况则仍然返回instance
  if (typeof result === 'function' || (typeof result === 'object' && result !== null)) {
    return result
  }

  if (Func.prototype) {
    Object.setPrototypeOf(instance, Func.prototype)
  }
  return instance
}
