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
      isCalled = true;
      onResolve(val);
    }
  }
  function reject(val) {
    onReject(val);
  }
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

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
