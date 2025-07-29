// ## Move Zeroes - move all 0's to the end of it while maintaining the relative order of the non-zero elements

function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt] = temp;
            lastNonZeroFoundAt++
        }
    }
    return nums;
}

const nums = [1, 0, 0, 2, 3];
console.log(moveZeroes(nums)); // [1, 2, 3, 0, 0]