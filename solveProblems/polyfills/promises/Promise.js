// Polyfill for Promise
function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    //here onResolve is a callback function for asychronous operation and for synchroous its just a val here for examample its 2 and incase of just a resolve(2) it will throw error and we need handle it that is check if onResolve is a function and if it is then resolve it and if not go to then method and resolve because the control will go to the then method
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
    return this; // returnig the promise polyfill class that is PromisePolyFill
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
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => console.error("Rejected:", err));

