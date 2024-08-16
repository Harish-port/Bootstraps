// Promise in javascript
// In asynchronous operation .then() will be called first

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

//Polyfill for promise
function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isCalled = false,
    value;
  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onResolve === "function") {
      onReject(value);
      called = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFullfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isFullfilled && !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
