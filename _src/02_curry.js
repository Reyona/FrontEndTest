export function curry(func) {
  return function curried(...args) {
    // 关键知识点：function.length用来获取函数的形参个数
    // 补充：arguments.length获取的是实参个数
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}
