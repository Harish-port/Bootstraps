/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
};

//Implementation
// 1. Initialize a variable x to keep track of the index of the next position to fill with a non-val element.
// 2. Loop through the array nums.
// 3. If the current element is not equal to val, assign it to nums[x] and increment x.
// 4. Finally, return x, which represents the new length of the array after removing all occurrences of val.
// Example Usage
// const nums = [3, 2, 2, 3];
// const val = 3;
// const newLength = removeElement(nums, val);
// console.log(newLength); // Output: 2     