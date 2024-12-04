if (!Array.prototype.myPushPolyfill) {
  Array.prototype.myPushPolyfill = function (...elements) {
    // this give the length of the array
    let length = this.length;
    for (let i = 0; i < elements.length; i++) {
      this[length] = elements[i];
      // this is basically 
      // this[3] = 4   that is Add "4" to the 3rd index of the array
      length++; // then increase the length for the next iteration
    }
    return length;
  };
}


let arr = [1,2,3];
arr.myPushPolyfill(4,5,6);

console.log(arr,"resutl");
