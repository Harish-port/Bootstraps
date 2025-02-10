// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.


var evenNumber = (nums) => {
    let count = 0;
    for (let num of nums) {
        // convert to string, makes it easier to calculate the length
        num = num.toString();
        if (num.length % 2 === 0) {
            count++;
        }
    }
    return count;
}
evenNumber([1113, 23, 4444, 2211, 23456]);

// output - 4

////// Added extras 

// 1. Return array of even numbers.

var evenNumber = (nums) => {
    let evenNumbsArr = [];
    for (let num of nums) {
        // convert to string, makes it easier to calculate the length
        num = num.toString();
        if (num.length % 2 === 0) {
            evenNumbsArr.push(parseInt(num))
        }
    }
    return evenNumbsArr;
}
evenNumber([1113, 23, 4444, 2211, 23456]);

// output  [1113, 23, 4444, 2211]