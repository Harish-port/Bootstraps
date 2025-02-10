// Binary search is an efficient algorithm that searches a sorted list for a desired, or target, element. For example, given a sorted list of test scores, if a teacher wants to determine if anyone in the class scored 80 80, she could perform a binary search on the list to find an answer quickly.

// is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.

//  It works by repeatedly dividing the search range in half and discarding the half that doesn't contain the target.

function binarySearch(nums, target) {
  // initialize the search range
  //   left represents the starting index of the search range.
  // right represents the ending index of the search range.
  let left = 0;
  let right = nums.length - 1;
  // This loop runs as long as there are elements to search in the range (left ≤ right).
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
