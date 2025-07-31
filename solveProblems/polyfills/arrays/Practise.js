const arr = [1, 2, 3, 4, 5];


if (!Array.prototype.myMapPoylfill) {
    Array.prototype.myMapPoylfill = function (thisArgs,cb) {
        if (this === null) {
            throw new TypeError("myMapPolyfill cannot be called on null or undefined");
        }
        if (typeof cb !== 'function') {
            throw new TypeError("cb is non-callable function");
        }
        let arr = Object(this);
        let len = this.length
        for (let i = 0; i < len; i++) {
        }
    }
}
let ress = arr.every((item) => {
    return item > 0
})
console.log(ress);
