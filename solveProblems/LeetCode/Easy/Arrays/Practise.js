function towSum(nums) {
  let memory = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    let compentent = target - nums[i];
    if (memory.has(compentent)) {
      return [memory.get(compentent), i];
    }
    memory.set(nums[i], i);
  }
  return [];
}
