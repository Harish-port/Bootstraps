const promise1 = Promise.reject("promise 1 is rejected");
const promise2 = Promise.resolve("promise 2 is fulfilled");
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 3 is fulfilled");
  }, 1000);
});

Promise.allSettledPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    if (!promises.length) {
      resolve(results);
      return;
    }
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((value) => {
        results[idx] = { status: "fullfilled", value }
      }).catch((reason) => {
        results[idx] = { status: "rejected", reason }
      })
        .finally(() => {
          pending--;
          if (pending === 0) {
            resolve(results);
          }
        });
    })
  })
};

Promise.allSettledPolyfill([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((err) => {
    console.log(err, "error");
  });
