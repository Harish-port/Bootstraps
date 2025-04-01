const promise1 = Promise.resolve("prome 1 fulfilled")
const promise2 = Promise.reject("prome 2 fulfilled")
const promise3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise 3 is fulfilled")
  })
});

Promise.promiseAnyPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;
    let totalPromises = promises.length;
    if (totalPromises === 0) {
      return reject(new AggregateError([], "All promises were rejected"))
    }
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then(resolve).catch((error) => {
        errors[idx] = error;
        rejectedCount++;
        if (rejectedCount === totalPromises) {
          return reject(new AggregateError(errors, "All  promises were rejected "))
        }
      })
    })
  })
}

Promise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((error) => {
    console.log(error);
  });

