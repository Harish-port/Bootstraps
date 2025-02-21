var thirdMax = function (nums) {
  let uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);
  console.log(uniqueNums, "<<<");

  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
};

// Test cases
console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2])); // Output: 2
console.log(thirdMax([2, 2, 3, 1])); // Output: 1

// wihtout using set
// function thirdMax(nums) {
//     // Get unique values without using Set
//     let uniqueNums = nums.filter((value, index, self) => self.indexOf(value) === index);

//     // Sort the array in descending order
//     uniqueNums.sort((a, b) => b - a);

//     // Return the third max if it exists, otherwise return the max
//     return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
// }

// // Test cases
// console.log(thirdMax([3,2,1])); // Output: 1
// console.log(thirdMax([1,2]));   // Output: 2
// console.log(thirdMax([2,2,3,1])); // Output: 1
