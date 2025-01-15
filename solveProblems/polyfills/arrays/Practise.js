const arr = [ 23, 4, 5, 6, 7, 890];

Array.prototype.myArrayInclude = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; this.length; index++) {
    accumulator = accumulator
      ? cb(accumulator, this[index], index, this)
      : this[index];
  }
  return accumulator;
};
console.log(
  arr.some((item) => item === 3),
  "AWS"
);
