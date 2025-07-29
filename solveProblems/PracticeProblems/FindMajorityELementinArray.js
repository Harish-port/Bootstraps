// ### Find the majority repeated element in an array

function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }
    return candidate;
}

// Example usage
console.log(findMajorityElement([3, 2, 3])); // Output: 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(findMajorityElement([7, 7, 7, 7, 1, 1, 1])); // Output: 7