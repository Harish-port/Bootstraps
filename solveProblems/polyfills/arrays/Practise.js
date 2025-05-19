const nums = [1, 2, 3, 4];


Array.prototype.myCustomArrInclude = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(this[index], index, this) : this[index];
    }
    return accumulator
}


const sum = nums.myCustomArrInclude((acc, currentValue, index, arr) => {
    return acc + currentValue;
}, 0)
console.log(sum);
