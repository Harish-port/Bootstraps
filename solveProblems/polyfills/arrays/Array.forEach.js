Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
      cb(this[index], index, this);
    }
  };
  
  // Example usage
  const arr = [
    1, 3, 4, 5, 123, 12, 3, 5, 5, 12315, 1, 23, 56, 87, 5, 7, 8, 9, 9, 34,
  ];
  
  arr.myForEach((ele, index) => {
    console.log(`Element: ${ele}, Index: ${index}`);
  });
  