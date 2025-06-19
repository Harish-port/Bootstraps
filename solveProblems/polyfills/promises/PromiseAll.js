// Promise.All in js

// Waits for all the promises to resolve or for any to reject

function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${userName}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
// loop through each promises and resolve them and if any error reject them
Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pending = promises.length;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};
Promise.allPolyFill([
  importantAction("youtube channel"),
  likeTheVideo("JS interview Questions"),
  shareTheVideo("JS interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
