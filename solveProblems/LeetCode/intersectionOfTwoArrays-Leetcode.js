let num1 = [1, 2, 2, 1];
let num2 = [2, 2];

var intersection = function (num1, num2) {
  let set1 = new Set(num1);
  let set2 = new Set(num2);
  var intersectValues = new Set([...set1].filter((x) => set2.has(x)));

  return Array.from(intersectValues);
};
console.log(intersection(num1, num2));
