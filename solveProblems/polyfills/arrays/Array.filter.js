Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) temp.push(this[index]);
  }
  return temp;
};

const arr = [
  1, 3, 4, 5, 123, 12, 3, 5, 5, 12315, 1, 23, 56, 87, 5, 7, 8, 9, 9, 34,
];

const filterRes = arr.myFilter((ele) => {
  return ele < 5;
});
console.log(filterRes, "filterRes");
// Note:

1.