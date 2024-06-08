// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = (nums, target) => {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// Space - O(1)
// Time - O(N)^2

// Optimized solutuion

var twoSum2 = (nums, target) => {
  let memory = {};
  for (let i = 0; i <= nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memery[target - nums[i]] = i;
    } else {
      return [memery[(nums[i], i)]];
    }
  }
};

twoSum2([2, 7, 11, 15], 9);
