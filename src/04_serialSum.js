function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

export async function serialSum(...args) {
  // todo
}
