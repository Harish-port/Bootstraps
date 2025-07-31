function shallowClone(value) {
    if (typeof value === null || typeof value !== "object") {
        throw new TypeError("input must be a non-null object")
    }

    let copy = Array.isArray(value) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = obj[key];
        }
    }
    return copy;
}

const original = {
  name: "Harish",
  age: 28,
  nested: { city: "Bangalore" }
};

const copy = shallowCopy(original);

console.log(copy); // { name: 'Harish', age: 28, nested: { city: 'Bangalore' } }

copy.name = "Changed";
copy.nested.city = "Mysore";

console.log(original.name); // Harish ❌ → Changed (copy)
console.log(original.nested.city); // ❌ Mysore → because shallow copy doesn't clone nested objects
