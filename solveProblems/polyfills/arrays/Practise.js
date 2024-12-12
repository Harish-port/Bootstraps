const arr = [1, 2, 3, 4, 5, 6, 7];

/// Map polyfill
Array.prototype.myArrayMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

//filter polyfil

Array.prototype.myArrayMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this));
    temp.push(this[i]);
  }
  return temp;
};

//reduce polyfill
// arr.reduce((acc,currentEle,index, actualArr)=>{},initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length - 1; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
