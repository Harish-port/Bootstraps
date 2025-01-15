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
    let errors = [];
    let rejectedCount = 0;
    let totalPromises = promises.length;
    if (totalPromises.length === 0) {
      return reject(new AggregateError("All promises were rejected"));
    }
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[idx] = error;
          rejectedCount++;
          if (rejectedCount === totalPromises) {
            return reject(new AggregateError("All promises were rejected"));
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
