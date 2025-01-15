// arr.flat will take depth as parameter(ex. for 1 it will flatten one level deep) by default its 1

const arr = [1, 2, 3, [4, 5], [6, 7, 8, [9, [10, 11, 12]]]];

//myFlat will be assigned to Array now and we can access the myFlat

// Note:
// 1.Since myFlat is attached to arr 'this' points to arr in the function

Array.prototype.myFlat = function (depth = 1) {
  const flattenedArray = [];
  function flatterner(array, depth) {
    for (const el of array) {
      if (Array.isArray(el) && depth) {
        flatterner(el, depth-1);
      } else {
        flattenedArray.push(el);
      }
    }
  }
  flatterner(this, depth);
  return flattenedArray;
};

const res = arr.myFlat(2);

console.log(res);
