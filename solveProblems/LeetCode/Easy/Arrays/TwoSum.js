// What is a Map?

// A Map in JavaScript is a data structure introduced in ES6 that allows you to store key-value pairs. Unlike regular objects, Map provides several advantages:

// Key Types: Keys in a Map can be of any type (objects, functions, primitives), whereas keys in objects are always strings or symbols.
// Order: Map maintains the order of its elements based on the insertion order.
// Size Property: Map has a size property that returns the number of key-value pairs.
// Methods: Map provides convenient methods for adding, removing, and iterating over its elements.
// Problem:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.

const twoSum = (nums, target) => {
  const memory = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    const complement = target - nums[i];
    if (memory.has(complement)) {
      return [memory.get(complement), i];
    }
    memory.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([1, 2, 3, 4, 2], 7));

// Step-by-Step Explanation:
// Complement Calculation:

// For each number nums[i], calculate the complement as target - nums[i].
// Check the Hash Map:

// Check if the complement exists in the hash map (memory).
// If it exists, return the indices of the current number and the complement.
// Store in Hash Map:

// If the complement does not exist, store the current number and its index in the hash map.
// Guaranteed Pair:

// The problem guarantees one valid solution, so we don't need to handle cases where no pair exists.

// Complexity:
// Time Complexity:
// 𝑂
// (
// 𝑛
// )
// O(n), where
// 𝑛
// n is the length of the input array.
// Each lookup and insertion into the hash map is
// 𝑂
// (
// 1
// )
// O(1), and we iterate through the array once.
// Space Complexity:
// 𝑂
// (
// 𝑛
// )
// O(n), for the hash map to store up to
// 𝑛
// n elements.

//Brute force approach

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
}
