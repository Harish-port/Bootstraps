
// **Definition**: returns the first index at which a given element can be found in the array, or **`-1`** if it is not present

Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    //this means array here
    if (this == null) {
        throw new TypeError('"this" is null or not defined');
    }
    const length = Math.max(0, this.length); // Ex: array.length

    //extra check to validate if the array is empty
    if (length === 0) {
        return -1;
    }

    //if 2nd arg is provided then fromIndex will be considered as index otherwise 0 is the index every time
    let index = fromIndex | 0;

    //if the index you want to search is more than the length of the array then return -1
    if (index >= length) {
        return -1;
    }

    // if the second arg is negative then we are subtracting array length - (Math.abs(index), 0) Ex: 3 - Math.abs(-1), 0 which results 2
    //   index = Math.max(index >= 0 ? index : length - Math.abs(index), 0);

    while (index < length) {
        // this is the array and we are searching for index
        if (this[index] === searchElement) {
            return index; //finally it returns index
        }
        index++;
    }
    // return -1 if the searchElement is not found as part of the array provided
    return -1;
};