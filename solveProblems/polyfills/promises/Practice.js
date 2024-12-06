const examplePromise = new customPromisePolyfill((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred!");
    }, 1000);
  });
  
  examplePromise
    .then((res) => {
      console.log("Resolved:", res);
    })
    .catch((err) => console.error("Rejected:", err));
  

function customPromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;
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
    if (isRejected && !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };
  function resolve(val) {
    isFullfilled = true;
    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }
  function reject(val) {
    isRejected = val;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(val);
    }
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
