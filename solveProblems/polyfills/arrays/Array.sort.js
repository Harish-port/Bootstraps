if (!Array.prototype.mySort) {
    Array.prototype.mySort = function (compareFn) {
        if (this == null) {
            throw new TypeError('Array.prototype.mySort called on null or undefined');
        }

        const arr = this;
        const len = arr.length;

        // Default compare function (like built-in sort without arguments)
        const defaultCompare = (a, b) => {
            const strA = String(a);
            const strB = String(b);
            if (strA > strB) return 1;
            if (strA < strB) return -1;
            return 0;
        };

        const compare = compareFn || defaultCompare;

        // Simple Bubble Sort
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                }
            }
        }

        return arr;
    };
}
const nums = [10, 2, 5, 1];
nums.mySort((a, b) => a - b);
console.log(nums); // [1, 2, 5, 10]

const strings = ['banana', 'apple', 'cherry'];
strings.mySort(); // default lexicographical sort
console.log(strings); // ['apple', 'banana', 'cherry']
