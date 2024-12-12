const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "first")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "second")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "error")
);

if (!Promise.customPromiseAny) {
  Promise.customPromiseAny = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise).then(resolve, reject).catch(reject);
      });
    });
  };
}
Promise.customPromiseAny([promise1, promise2, promise3])
  .then((res) => {
    console.log(res, "result");
  })
  .catch((error) => {
    console.log(error);
  });
