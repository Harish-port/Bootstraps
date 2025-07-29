// **calculate sum of numbers in an nested array**
// // 
function sumArray(nums) {
    let res = 0;
    for (let index of nums) {
        if (Array.isArray(index)) {
            res = res + sumArray(index);
        } else {
            res = res + index;
        }
    }
    return res;
}

console.log(sumArray([1, 2, [3, [4], [5, 6]], [7]])); // 28

