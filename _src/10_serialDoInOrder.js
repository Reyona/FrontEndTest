export class Queue {
  promise = Promise.resolve();

  handleTask(promise) {
    this.promise = this.promise.then(() => promise);
    return this.promise;
  }
}
