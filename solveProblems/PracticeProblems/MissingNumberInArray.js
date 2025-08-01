// ## Missing Number in an Array
function missingNumber(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return (nums.length * (nums.length + 1)) / 2 - sum
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8