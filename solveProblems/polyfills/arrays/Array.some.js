// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

const arr = [23, 4, 5, 6, 7, 5, 890];

const res = arr.some(greaterThanFour);
function greaterThanFour(item) {
  return item <= 5;
}
Array.prototype.mySome = function (callback, thisArgs) {
  if (this === null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  //Object(this) ensures that the polyfill works on any array-like object, not just true arrays.
  const array = Object(this);

  const length = array.length >>> 0;
  for (let i = 0; i < length; i++) {
    if (i in array && callback.call(thisArgs, array[i], i, array)) {
      return true;
    }
  }
  return false;
};
console.log(res);

const res1 = arr.mySome(greaterThanFour);
function greaterThanFour(item) {
  return item <= 5;
}
///
// is used to ensure the length is always a valid, non-negative, 32-bit unsigned integer. Here’s why it’s necessary in context:

// Detailed Explanation
// What array.length Represents:

// For true arrays, length is a non-negative integer automatically managed by JavaScript.

// For array-like objects or manually created objects, length may not always be valid or numeric.

// Example:

// javascript
// Copy code
// const arrayLike = { 0: 'a', 1: 'b', length: '5' }; // length is a string
// Purpose of >>> 0:

// >>> 0 (unsigned right shift) converts length into a non-negative, 32-bit unsigned integer. This ensures:
// Negative values become 0.
// Non-numeric values like strings, null, or undefined default to 0.
// Large values wrap within the valid range of [0, 2^32 - 1].
