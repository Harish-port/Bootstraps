// Problem:
// You’re given an array of n distinct numbers in the range [0, n]. One number is missing from the array. Find it.

function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); ///output: 2
