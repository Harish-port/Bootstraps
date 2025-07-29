// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let uniqueIndex = 0; // Index of the last unique element found
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[uniqueIndex]) { // Compare current element with the last unique element
            uniqueIndex++; // Move to the next position for a new unique element
            nums[uniqueIndex] = nums[i]; // Set the next position to the current element
        }
    }
    return uniqueIndex + 1; // Return the count of unique elements
}


// Implementation
// 1. loop through the array
// 2. if the current element is greater than the last unique element found, increment the index of unique elements and set the next position to the current element.
// 3. return the length of unique elements found by adding 1 to the index of unique elements.