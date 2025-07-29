// ## Find the occurrence in given array in JavaScript
// Input:

// [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

// Output:

// {
//     "2": 5,
//         "4": 1,
//             "5": 3,
//                 "9": 1,
// }
// Explanation: The output is an object where the keys are the unique numbers from the input array and the values are their respective counts.
function countOccurrences(nums) {
    let res = {};
    for (let i of nums) {
        if (!res[i]) {
            res[i] = 1
        } else {
            res[i] = res[i] + 1
        }
    }
    return res;
}



const input = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const output = countOccurrences(input);
console.log(output);