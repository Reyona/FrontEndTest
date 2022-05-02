function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}


export async function parallelSum(...args) {
  // todo
}
