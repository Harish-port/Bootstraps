// 1. What is the difference between shallow copy and deep copy?

// Shallow Copy: It Copies only the top - level properties.Nested Objects / arrays are still references.

// Example : - 
const original = {
    name: "Harish",
    address: {
        city: "Bangalore"
    }
}

const shallow = { ...original }
shallow.name = 'vinay';
shallow.address.city = 'india';

console.log(shallow, "shallow"); //{ name: 'vinay', address: { city: 'india' } } 
console.log(original, "original"); //{ name: 'Harish', address: { city: 'india' } }

// Shallow Copy Methods:
// a. Object.assign({}, original)
// b. Spread Operator: {...original }
// c. Array.slice() or Array.concat();

// Deep Copy: Copies everything, including nested objects and arrays, creates independent clones of the orignal object / array
const deep = JSON.parse(JSON.stringify(original));

deep.address.city = "chennai";
deep.name = 'vinay';

// Deep Copy Methods.

// a. JSON.parse(JSON.stringify(obj)); [ Easy ]
// b. structedClone(obj) //	Native deep clone that handles more types safely [ modern and safe]
// c. loadash.cloneDeep()  // good for nested/complex objects

// Final Verdict
// Use shallow copy if you’re only changing top-level values.

// Use deep copy if you want to change nested values without affecting the original.

2. What is prototype ?
    In Js, every object has a special hidden property called[[Prototype]](or just __proto__ in older browsers), which links to another object.This 'other object' is called the prototype.
  THe prototype is like a blueprint or a fallback object.If javascript can't find a property on an object, it looks up the chain to its proptotype.
  
  3. what is prototypal Inheritance?
  