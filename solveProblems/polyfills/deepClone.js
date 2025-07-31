
function customCloneDeep(value) {
    //Handle primitives and null/undefined

    if (value === null || typeof value !== "object") {
        return value;
    }

    //Handle the arrays

    if (Array.isArray(value)) {
        const arrCopy = [];
        for (let i = 0; i < value.length; i++) {
            arrCopy[i] = customCloneDeep(value[i]);
        }
        return arrCopy;
    }

    //Handle the object

    if (typeof value === "object") {
        const objCopy = {};

        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                objCopy[key] = customCloneDeep(value[key]);
            }
        }
        return objCopy;
    }

    // In case the value is a special type that isn't handled above
    throw new Error("Unable to clone value! Its type is not supported.");
}
const object1 = {
    name: "Alice",
    address: {
        age: 30,
        city: "Wonderland",
    },
    hobbies: ["reading", "coding"],
};

// Assigning object1 to object2 - this creates a reference, not a clone.
const object2 = object1;

// Modifying object2
object2.name = 'Bob';

console.log(object1.name);

console.log(object2)// {name: 'Bob', address: {…}, hobbies: Array(2)}
console.log(object1); //{name: 'Bob', address: {…}, hobbies: Array(2)}