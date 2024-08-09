// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// I: number[] = nums
// O: number[] = Product of all elements except for itself
// C: O(N), Cannot use division

let nums = [1, 2, 3, 4];
// leftProduct = [1, 1, 2, 6];
// leftProduct = [24, 12, 4, 1];
// solutuinArray = [24, 12, 8, 6];
// var productExceptSelf = function (nums) {
//   let leftProduct = [];
//   let rightProduct = [];
//   let solution = [];
//   for (let i = 0; i < nums.length; i++)
//     if (leftProduct.length === 0) {
//       leftProduct.push(1);
//     } else {
//       leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
//     }

//   for (let i = nums.length - 1; i > -1; i--) {
//     if (rightProduct.length === 0) {
//       rightProduct.push(1);
//     } else {
//       rightProduct.unshift(rightProduct[0] * nums[i + 1]);
//     }
//   }
//   for (let i = 0; i < leftProduct.length; i++) {
//     solution.push(leftProduct[i] * rightProduct[i]);
//   }
//   return solution;
// };


///Optimized solution >>>>>>

var productExceptSelf = function (nums) {
  // Value to increment per each index
  let carry = 1;
  // Array to return all the product values
  const output = Array(nums.length).fill(1);
  console.log(output);
  
  // Add products to output array starting at the front
  for (let i = 0; i < nums.length; i++) {
    output[i] *= carry;
    carry *= nums[i];
  }
  // Reset carry
  carry = 1;
  // Add products to output array starting at the back
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= carry;
    carry *= nums[i];
  }
  return output;
};
productExceptSelf(nums);
