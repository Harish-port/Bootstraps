function employeeDetails(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}
function companyDetails(company) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}
function userDetails(employee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
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

Promise.all([
  employeeDetails("Harish"),
  companyDetails("IBM"),
  somethingRandom("Aravind"),
]);
