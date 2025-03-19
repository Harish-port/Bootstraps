const promise1 = Promise.reject("promise 1 is fullfiled");
const promise2 = Promise.resolve("promise 2 is fullfiled");
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("priomise 3 is fillfiled");
  }, 1000);
});

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pending = promises.length;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((value) => {
          results[idx] = { status: "fullfilled", value };
        })
        .catch((reason) => {
          results[idx] = { status: "rejected", reason };
        })
        .finally(() => {
          pending--;
          if (pending === 0) {
            resolve(results);
            return;
          }
        });
    });
  });
};

Promise.allPolyfill([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((err) => {
    console.log(err, "error");
  });
