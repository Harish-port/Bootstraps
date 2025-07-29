// ## Find the matching object property;
function findMatchingObjectProperty(obj, [key, value]) {
    for (let prop in obj) {
        let currentValue = obj[prop];
        if (prop === key && currentValue === value) return true;
        if (typeof obj === "object") {
            if (
                findMatchingObjectProperty(currentValue, [key, value])
            ) {
                return true;
            }
        }
    }
    return false;
}

// Example object and test
const obj = {
    a: 1,
    b: {
        c: [
            {
                d: 'd1',
            },
            {
                z: 'z1',
            },
        ],
        m: 'm2',
    },
};

console.log(findMatchingObjectProperty(obj, ['z', 'z1'])); // Output: true
console.log(findMatchingObjectProperty(obj, ['z', '1'])); // Output: false
console.log(findMatchingObjectProperty(obj, ['d', 'd1'])); // Output: true