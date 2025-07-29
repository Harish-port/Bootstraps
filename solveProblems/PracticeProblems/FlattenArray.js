function flattenRecursive(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item));
    } else {
      result.push(item);
    }
  }
  return result;
}


const nestedArray = [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]];
console.log(flattenRecursive(nestedArray)); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]