// Parent
export function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  return this.name;
};

// Child
export function Child(age, name) {
  // todo
}

