var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === nums[i-1]){
            nums.splice(i,1)
        }
    }
    return nums;
};
const test = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(test, "tsses");
