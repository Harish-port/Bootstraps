// Polyfill for map()

const arr = [1, 2, 3, 4, 5];

// Array.map((num,index,array)=> {})         /// Syntax of map()
// where num is the current Element

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  return temp;
};

const test = arr.myMap((e) => {
  return e * 2;
});

console.log(test, "Test");
