const user = {
    name: "Harish",
    age: 27
};

function getType(value) {
    if (typeof value === null) return null;
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

function myStringify(value) {
    let type = getType(value);
    switch (type) {
        case "array":
            const arrayValues = value.map((item) => myStringify(item)).join(",");
            return `[${arrayValues}]`;
        case 'object':
            const objectValues = Object.entries(value).map(([key, value]) => `"${key}":"${myStringify(value)}"`).join(",");
            return objectValues;
        case 'string':
            return `"${value}"`;
        default:
            return String(value)
    }
}