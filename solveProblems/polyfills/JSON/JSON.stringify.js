// JSON.stringify()

// Converts JS object into JSON string.
const user = {
    name: "Harish",
    age: 27
};

function getType(value) {
    if (value === null) return null;
    if (Array.isArray(value)) return 'array';
    return typeof value
}

function myStringify(value) {
    const type = getType(value)
    switch (type) {
        case "array":
            const arrayValues = value.map((item) => myStringify(item)).join(',');
            return `[${arrayValues}]`;
        case "object":
            const objectValues = Object.entries(value).map(([key, value]) => `"${key}":${myStringify(value)}`).join(",");
            return `{${objectValues}}`;
        case 'string':
            return `"${value}"`;
        default:
            return String(value)
    }
}

const jsonString = myStringify(user);
console.log(jsonString);
// Output: '{"name":"Harish","age":27}'