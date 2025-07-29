// ## Find a first pair whose sum is zero using indexing

function getSumPairZero(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let len = nums.length;
    let right = len - 1;
    let left = 0;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === 0) {
            return [nums[left], nums[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return 0;
}
const result = getSumPairZero([-6, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 8]);
console.log(result); // [-6, 6]