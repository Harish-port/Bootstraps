function sortArray(arr) {
  var temp = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
}

console.log(sortArray([2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6]));
