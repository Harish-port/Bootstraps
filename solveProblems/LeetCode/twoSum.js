// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

<<<<<<< HEAD
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = (nums, target) => {
    for (let i = 0; i <= nums.length; i++){
        for(let j = i+1; j <= nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
}

twoSum([2,7,11,15],9)
=======
var nums= [2,7,11,15],target = 9;

var twoSum = function(nums, target) {
 for(let i = 0;i<nums.length-1;i++){
     for(let j=i+1;j<nums.length-1;j++){
         if(nums[i]+nums[j]===target){
             return [i,j]
         }
     }
 }
}
twoSum(nums,target)
>>>>>>> f76838575859458d4f7300d0f5e629875e19cf92
