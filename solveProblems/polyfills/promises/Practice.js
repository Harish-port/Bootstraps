const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, "first"));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 300, "second"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "error")
);

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;
    let totalPromises = promises.length;
    if (totalPromises === 0) {
      return reject(new AggregateError(errors, "All promises were rejected"));
    }
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch((error, idx) => {
        errors[idx] = error;
        rejectedCount++;
        if (totalPromises === rejectedCount) {
          return reject(new AggregateError(errors, "All promises were rejected"));
        }
      })
    })
  })
};

Promise.allPolyfill([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((err) => {
    console.log(err, "error");
  });