// Polyfill for Promise
function PromisePolyFill(executor) {
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
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") { // FIXED: Check onReject here
      onReject(value);
      isCalled = true;
    }
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
    if (isRejected && !isCalled) {
      isCalled = true;
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
const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve("Error occurred!");
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => console.error("Rejected:", err));

