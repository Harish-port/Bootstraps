// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

Array.prototype.myFindIndex = function (cb) {
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      return index; // Return the index of the first element that matches
    }
  }
  return -1; // Return -1 if no elements match the condition
};

// Example usage
const arr = [1, 3, 4, 5, 123, 12, 3, 5, 5, 12315, 1, 23, 56, 87, 5, 7, 8, 9, 9, 34];

const index = arr.myFindIndex((ele) => ele > 100);
console.log(index); // Output: 4 (the index of the first element > 100)
