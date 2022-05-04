Function.prototype.myBind = function (context = globalThis) {
  const fn = this;
  const args = Array.from(arguments).slice(1);
  const newFunc = function () {
    const newArgs = args.concat(...arguments);
    if (this instanceof newFunc) {
      // 通过new调用，绑定this为实例对象
      return fn.apply(this, newArgs);
    } else {
      // 通过普通函数形式调用，绑定context
      return fn.apply(context, newArgs);
    }
  }
  // 支持new调用方式
  newFunc.prototype = Object.create(fn.prototype)
  return newFunc;
}
