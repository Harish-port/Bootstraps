// Realtime example usage
const arr = [1, 2, 3];
console.log(arr.includes(3)); //true
console.log(arr.includes(4)); //false

Array.prototype.myPolyIncludes = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

console.log([1, 2, 3].myPolyIncludes(2)); // true;
console.log([1, 2, 3].myPolyIncludes(4)); // false;
console.log([1, 2, 3].myPolyIncludes(3, 3)); // false;
console.log([1, 2, 3].myPolyIncludes(3, -1)); // true;
console.log([1, 2, NaN].myPolyIncludes(NaN)); // true
console.log(["1", "2", "3"].myPolyIncludes(3)); // false
console.log("----------------------------------------");
const arr1 = ["a", "b", "c"];
console.log(arr1.myPolyIncludes("c", 3)); // false
console.log(arr1.myPolyIncludes("c", 100)); // false
console.log("----------------------------------------");
console.log(arr1.myPolyIncludes("a", -100)); // true
console.log(arr1.myPolyIncludes("b", -100)); // true
console.log(arr1.myPolyIncludes("c", -100)); // true
console.log(arr1.myPolyIncludes("a", -2)); // false
console.log("----------------------------------------");
console.log([1, , 3].myPolyIncludes(undefined)); // true
console.log("----------------------------------------");
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignored by includes() since length is 3
};
console.log(Array.prototype.myPolyIncludes.call(arrayLike, 2));
// true
console.log(Array.prototype.myPolyIncludes.call(arrayLike, 1));
console.log(arr.myPolyIncludes(3), "<<<"); //true
