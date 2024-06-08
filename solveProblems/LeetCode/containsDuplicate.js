// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //Go through the array and see  if what i see now , is something ive seen before.
  // if my number is never seen before,put it in memory
  //if the number does exist in memory, return true.
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "haha";
    } else {
      return true;
    }
  }
  return false;
};

// Time complexity = O(N)
// Space = O(N)
// optimized solution
var containsDuplicate1 = function (nums) {
  //sort our input array (O NlogN)
  nums.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
  return false;
};

console.log(containsDuplicate1(nums));