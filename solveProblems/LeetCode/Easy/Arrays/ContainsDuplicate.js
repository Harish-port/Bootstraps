// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// 1. Brute Force approach
// But the Time complexity is O(n2)  because of the nested loops

let nums = [1, 2,1];
function ContainsDuplicate(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] === nums[k]) {
        return true;
      }
    }
  }
  return false;
}

// 2. Set based Approach
function ContainsDuplicate1(nums) {
  let numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}
// Explanation:
// Set: A Set in JavaScript automatically ensures all its elements are unique.
// Logic: Iterate through the array and check if a number is already in the Set. If it is, return true. Otherwise, add it to the Set.
// Efficiency: This approach has a time complexity of 
// 𝑂
// (
// 𝑛
// )
// O(n), where 
// 𝑛
// n is the length of the array.
console.log(ContainsDuplicate1(nums));
