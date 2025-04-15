let arr = [1, 3, 4, 6, 7, 8];
let res = arr.map((item) => item * 2)
Array.prototype.myCustomMap = function (cb) {
  
}

console.log(arr.myCustomMap((ele) => ele > 3));
