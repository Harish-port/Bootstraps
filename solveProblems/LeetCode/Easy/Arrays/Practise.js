function twoSum(nums, target) {
  const memory = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (memory.has(complement)) {
      return [memory.get(complement), i];
    }
    memory.add(nums[i], i);
  }
  return [];
}
// Example usage
console.log(twoSum([1, 2, 3, 4, 2], 7));
