// How Many Numbers Are Smaller Than the Current Number

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map(num => sorted.indexOf(num));
  };

  smallerNumbersThanCurrent([8,1,2,2,3]);
