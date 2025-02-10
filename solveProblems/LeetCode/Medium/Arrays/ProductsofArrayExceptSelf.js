// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

function productExceptSelf(nums) {
  let n = nums.length;
  let output = new Array(n).fill(1);

  // Step 1: Compute Left Product (Prefix)
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  // Step 2: Compute Right Product (Suffix)
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
}

// Example Usage
console.log(productExceptSelf([1, 2, 4, 6])); // Output: [48, 24, 12, 8]
console.log(productExceptSelf([-1, 0, 1, 2, 3])); // Output: [0, -6, 0, 0, 0]
