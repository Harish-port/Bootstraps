const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0;
    let maxLength = 0;
    let numsSet = new Set(nums);
    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1
            while (numsSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (Sequence: [1, 2, 3, 4])
