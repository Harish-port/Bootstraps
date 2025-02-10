// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome

// Follow up: Could you solve it without converting the integer to a string?

// 1.

var isPalindrome = function (x) {
  x == x.toString().split("").reverse().join("");
};

// 2.

// The idea is very simple

// check if the number is less than zero
// if the number is less than zero, return false
// initialize a variable temp with X ( because we lose the initial value of X in the logic)
// initialize the reverse variable with 0
// loop over the number until it's less than or equal to zero (at one point it will be)
// now, multiply the reversed variable with 10 and add the last digit of the number to it
// remove the last digit of X
// when the loop ends, we will have our reversed number
// if the reversed number is equal to temp ( initial number ), return true
// else, false

var isPalindrome = function (x) {
  const isNegative = x < 0 ? true : false;
  if (isNegative) {
    return false;
  }
  const temp = x;
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return reversed == temp;
};

