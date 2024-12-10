const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "first")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "second")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "error")
);

if (!Promise.customPromiseAll) {
  Promise.customPromiseAll = function (promies) {
    return new Promise((resolve, reject) => {
      let results = [];
      if (!promies.length) {
        resolve(results);
        return;
      }
      let pending = promies.length;
      promies.forEach((prom,idx) => {
        Promise.resolve(prom).then((res) => {
          results[idx] = res;
          pending--;
          if (promies.length === 0) {
            resolve(results);
            return;
          }
        }, reject);
      });
    });
  };
}
Promise.customPromiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((error) => {
    console.log(error);
  });
