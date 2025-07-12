function sortArray(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap values to sort in descending order
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}


console.log(sortArray([2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6]));
