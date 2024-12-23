// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

const arr = [5, 23, 4, 5, 6, 7,  890];

const res = arr.some(greaterThanFour);
function greaterThanFour(item) {
  return item < 2;
}

console.log(res);
