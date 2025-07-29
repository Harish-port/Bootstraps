const arr = [1, 2, 3, 4, 5];


if (!Array.prototype.myMapPoylfill) {
    Array.prototype.myMapPoylfill = function (cb) {
        if (this === null) {
            throw new TypeError("myMapPolyfill cannot be called on null or undefined");
        }
        if (typeof cb !== 'function') {
            throw new TypeError("cb is non-callable function");
        }
        let res = [];
        for (let i = 0; i < this.length; i++) {
            res.push(cb(this[i], i, this))
        }
        return res;
    }
}
let ress = arr.myMapPoylfill((item) => {
    return item * 2
})
console.log(ress);
