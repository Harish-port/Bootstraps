Promise.racePolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array of promises"));
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve) // Resolve as soon as the first promise resolves
        .catch(reject); // Reject as soon as the first promise rejects
    });

    // Handle case when promises array is empty
    if (promises.length === 0) {
      return; // No resolution or rejection if array is empty
    }
  });
};

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "first"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 300, "second"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "error")
);

Promise.racePolyFill([])
  .then((result) => console.log("Resolved with:", result))
  .catch((error) => console.error("Rejected with:", error));

//The output should not be Resolved with: first in this case because the custom implementation of Promise.customRace resolves or rejects based on whichever promise settles first.
// In your example:
// promise3 rejects after 200ms with "error".
// promise2 resolves after 300ms with "second".
// promise1 resolves after 500ms with "first".
// Since promise3 settles first (and it rejects), the final output will be:Rejected with: error
