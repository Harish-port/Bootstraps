// Synxtax for reduce method

// arr.reduce((acc, currentValue, index, array) => {}, initialValue);
//Note
// 1. what if user fails to give the initialValue and in this case the accumulator takes first element of array as initial value and currentValue is assigned as the second element of the array  
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? cb(accumulator, this[index], index, this)
      : this[index];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum, "Sum");


// most accurate versions

// if (!Array.prototype.myReduce) {
//     Array.prototype.myReduce = function (cb, initialValue) {
//         let accumulator;
//         let startIndex;

//         if (initialValue !== undefined) {
//             accumulator = initialValue;
//             startIndex = 0;
//         } else {
//             accumulator = this[0];
//             startIndex = 1;
//         }

//         for (let index = startIndex; index < this.length; index++) {
//             accumulator = cb(accumulator, this[index], index, this);
//         }

//         return accumulator;
//     };
// }
