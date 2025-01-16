function missingNumber(nums) {
  const n = numns.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
// Example usage
console.log(missingNumber([0, 2, 4, 6, 8])); // Output: 3
