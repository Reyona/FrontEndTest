// Parent
export function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  return this.name;
};

// Child
export function Child(age, name) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.sayAge = function () {
  return this.age;
}

function create(proto) {
  const type = typeof proto
  const isObject = type === 'function' || type === 'object' && !!proto
  if (!isObject) return {}
  function F() {}
  F.prototype = proto;
  return new F();
}
