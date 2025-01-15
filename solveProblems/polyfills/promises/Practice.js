function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isCalled,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    onReject(val);
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFullfilled && !isCalled) {
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

const examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res, "response");
  })
  .catch((err) => {
    console.log(err);
  });
