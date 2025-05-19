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

// 2. What is prototype ?
// In JavaScript, every object has a hidden property called Prototype that either points to another object or is null. This prototype chain allows objects to inherit properties and methods from other objects. Essentially, prototypes are the foundation of inheritance in JavaScript.
  
// 3. what is prototypal Inheritance?
// This prototypal Inheritance allows objects to inherit properties and methods from other objects. Each object has an internal link to another object called its prototype. When trying to access a property or method of an object, JavaScript first looks for it directly on the object itself. If it's not found, it then searches the object's prototype, and if not found there, it continues up the prototype chain until it reaches the end or finds the property. 

// How Does the Prototype Chain Work?
// When you try to access a property or method on an object, JavaScript will:

// Look for the property directly on the object.
// If it doesn’t find it, it will check the object’s prototype.
// If the property still isn’t found, it will traverse up the prototype chain until it reaches null.


// 4. What is Event Delegation?
// Event Delegation is a technique that simplifies the event handling by attaching event listners to the parent element instead of attaching individual listners to to each child element.
// This parent element then handles the events that bubble up from from its children using event propogation.

// 5. What is Event Bubbling?
// When an event occurs on a child element, it propogates up the DOM tree to its parent and ancestor elements, this process is known as event bubbling.

// 6. What is Event Propagation?
// Event propogation describes the order in which event handlers are called when an event occurs on a nested element. It has 3 phases:Capturing, target, Bubbling.

// Capturing phase: the event travels down the DOM tree from the window to the target element.Event listners attached in the capturing phase are triggered first.
// Target phase: the event reaches the target element where it originated.Event listners attached directly to the target element are triggered first.
// Bubbling phase:  When an event occurs on a child element, it propogates up the DOM tree to its parent and ancestor elements, this process is known as event bubbling.

// Note: In order to specify the capturing phase when adding an event listner using the addEventListener method with the useCapture option set to true.

// element.addEventListener('click', function(event) {
//   // Event handler logic
// }, true); // true indicates capturing phase
