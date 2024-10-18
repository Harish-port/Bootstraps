function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }
  function reject(val) {}
  this.then = function (callback) {
    onResolve = callback;
    if (isFullfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const examplePoyfill = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePoyfill
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
