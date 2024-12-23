const arr = [1, 23, 4, 5, 6, 7, , 890];

const res = arr.some(greaterThanFour);
function greaterThanFour(item) {
  return item > 1000;
}

console.log(res);
