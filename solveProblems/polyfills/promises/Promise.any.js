const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, "first"));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 300, "second"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "error")
);

if (!Promise.customAny) {
  Promise.customAny = function (promises) {
    return new Promise((resolve, reject) => {
      let errors = [];
      let rejectedCount = 0;
      let totalPromises = promises.length;
      if (totalPromises === 0) {
        return reject(new AggregateError([], "All promises were rejected"));
      }
      promises.forEach((promise, idx) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch((error) => {
            errors[idx] = error;
            rejectedCount++;
            if (totalPromises === rejectedCount) {
              return reject(
                new AggregateError(errors, "All promise were rejected")
              );
            }
          });
      });
    });
  };
}

Promise.customAny([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((error) => {
    console.log(error);
  });


