if (typeof Promise !== undefined && !Promise.prototype.customFinally) {
  Promise.prototype.customFinally = function (callback) {
    const P = this.constructor;

    return this.then((value) => {
      P.resolve(callback()).then(() => value),
        (reason) =>
          P.resolve(callback()).then(() => {
            throw reason;
          });
    });
  };
}
// Test cases
const successPromise = Promise.resolve("Success!");
const failPromise = Promise.reject("Failure!");

successPromise
  .then((value) => console.log(value))
  .catch((err) => console.log("Error:", err))
  .customFinally(() => console.log("Final callback for successPromise"));

failPromise
  .then((value) => console.log(value))
  .catch((err) => console.log("Error:", err))
  .customFinally(() => console.log("Final callback for failPromise"));

// ```js
// //Output:
// Success!
// Error: Failure!
// Final callback for successPromise
// Final callback for failPromise
// ```;
