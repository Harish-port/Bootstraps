function binarySearch(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midIndex = left + (right - left) / 2;
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] < target) {
      left = mid + 1;
    } else if (nums[midIndex] > target) {
      right = mid - 1;
    }
  }
  return -1;
}
