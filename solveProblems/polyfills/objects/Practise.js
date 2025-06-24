function ObjectAssign(target, ...sources) {
    if (target == null) return;
    target = Object(target);
    sources.forEach((source) => {
        if (source == null) return;
        mergeOwnProperties(Object.keys(source), source);
    });
    function mergeOwnProperties(keys, currentSrc) {
        keys.forEach((key) => {
            target[key] = currentSrc[key];
            if (target[key] != currentSrc[key]) {
                throw new Error(`Failed to assign value for key: ${String(key)}`)
            }
        })
    }
    return target;
}

const target = { a: 1 };
const source1 = { b: 2, c: 3 };
const source2 = { d: 4};

// Merging properties from source1 and source2 into target
const result = ObjectAssign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3, d: 4, [Symbol('symKey')]: 5 }