Function.prototype.myBind = function (context = globalThis, ...args) {
  // 简单版
  let fn = this;
  return function () {
    return fn.apply(context, args);
  };
}
