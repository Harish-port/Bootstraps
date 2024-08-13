// If the paramaters of functions are same then we need to cahce the result of the previous function somewhere
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000000; i++) {}
  return num1 + num2;
};
// withoutmemoized function
// console.time("First Call");
// console.log(clumsyProduct(9399, 7343));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(clumsyProduct(9399, 7343));
// console.timeEnd("Second Call");

// with memoized function

const memoizedClumzyPRoduct = myMemoize(clumsyProduct);
console.time("First Call");
console.log(memoizedClumzyPRoduct(9399, 7343));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumzyPRoduct(9399, 7343));
console.timeEnd("Second Call");
