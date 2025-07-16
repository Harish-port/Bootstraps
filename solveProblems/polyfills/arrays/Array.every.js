// ** Definition **: whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Example
if (!Array.prototype.customEvery) {
    Array.prototype.customEvery = function (callback, thisArgs) {
        if (this === null) {
            throw new Error("Array.prototype.customeEvery Called on null or undefined");
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + "is not a fucntuion");
        }
        var array = Object(this);
        var len = array.length;
        for (let i = 0; i < len; i++) {
            if (i in array && !callback.call(thisArgs, array[i], i, array)) {
                return false
            }
        }
        return true
    }
}

var fruits = ["mango", "mngo", "mango", "mango"];

var containsMango = fruits.customEvery((fruit) => {
    return fruit === "mango"
});

console.log(containsMango);
