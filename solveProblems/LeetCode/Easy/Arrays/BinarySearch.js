// Binary search is an efficient algorithm that searches a sorted list for a desired, or target, element. For example, given a sorted list of test scores, if a teacher wants to determine if anyone in the class scored 80 80, she could perform a binary search on the list to find an answer quickly.

// is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      // Calculate the middle index
      let mid = Math.floor(left + (right - left) / 2);
  
      if (nums[mid] === target) {
        return mid; // Found the target
      } else if (nums[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage
  console.log(binarySearch([-1, 0, 2, 4, 6, 8], 4)); // Output: 3
  console.log(binarySearch([-1, 0, 2, 4, 6, 8], 3)); // Output: -1
  