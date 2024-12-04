if (typeof Promise.customRace !== "function") {
  Promise.customRace = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError(
          "The arguments to customRace must be iterable, such as an array."
        );
      }
      for (const promise of promises) {
        Promise.resolve(promise).then(resolve, reject);
      }
    });
  };
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "first"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 300, "second"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "error")
);

Promise.customRace([promise1, promise2, promise3])
  .then((result) => console.log("Resolved with:", result))
  .catch((error) => console.error("Rejected with:", error));

//The output should not be Resolved with: first in this case because the custom implementation of Promise.customRace resolves or rejects based on whichever promise settles first.
// In your example:
// promise3 rejects after 200ms with "error".
// promise2 resolves after 300ms with "second".
// promise1 resolves after 500ms with "first".
// Since promise3 settles first (and it rejects), the final output will be:Rejected with: error
