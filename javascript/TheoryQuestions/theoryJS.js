// 1. What is the difference between shallow copy and deep copy?

// Shallow Copy: It Copies only the top - level properties.Nested Objects / arrays are still references.

// Example : - 
const original = {
    name: "Harish",
    address: {
        city: "Bangalore"
    }
}
const onb = {
    name:"sdlakshd",
    address:{
        city:"basbd"
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

// 7. what is hoisting?
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (either the global scope or a function scope) during the compile phase, before the code is executed.

// 8. this keyword


// 9. Event Loop?
// "JavaScript is single-threaded, so it can only execute one task at a time using the call stack. But to handle asynchronous operations like timers, API calls, or DOM events without blocking the UI, JavaScript uses something called the Event Loop.
// The Event Loop works with three main parts:
// The Call Stack, where code runs.
// The Web APIs, provided by the browser to handle async tasks like setTimeout, fetch, etc.
// The Callback Queue, where the results of async operations are queued.
// The Event Loop keeps checking if the call stack is empty. If it is, it takes the first callback from the queue and pushes it to the call stack for execution.
// This mechanism ensures non-blocking behavior even though JavaScript runs on a single thread."

// When asynchronous tasks complete (like a resolved Promise or a setTimeout), their callbacks are scheduled in different queues:
// 🧩 Microtasks Queue → e.g. Promises, queueMicrotask(), MutationObserver
// ⏰ Macrotasks Queue → e.g. setTimeout, setInterval, setImmediate, requestAnimationFrame

// Task queue = Macrotask queue = Callback queue(for understanding all are the same)


// 10. **`Event Delegation`: What is event delegation and why is it useful? Can you provide an example?**

// <details>
// <summary>View Answer</summary>
// - Is a technique where you delegate the handling of events to a common parent element rather than assigning event handlers to individual elements.

// - based on the event bubbling principle, where an event propagates up from the target element through its ancestors in the DOM hierarchy.

// ##### Why it is useful?

// **1. Efficiency**: Instead of attaching multiple event listeners you can attach a single event listener. Reduces overhead of managing multiple event listeners.

// **2. Dynamic elements**: If elements are added or removed dynamically you don't have to attach or remove event listeners for each element. The parent event listenere will hanlde events for all current and future child elements.

// **3. Less memory consumption**: Less event listeners means less memory consumption which can lead to performance improvements.
    
// ```js
// // Example:

// <ul id='itemList'>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// ```

// ```js
// // With event delegation:

// const itemList = document.getElementById('itemlist');
// itemList.addEventListener('click', function (event) {
//   if (event.target.tagName === 'LI') {
//     console.log(event.target.textContent);
//   }
// })

// 11. Event propagation
// Event propagation refers to the way events flow through the DOM when an event occurs. There are two main phases of event propagation:
// 1. **Capturing Phase**: The event starts from the root of the DOM tree and travels down to the target element that initiated the event.
// 2. **Bubbling Phase**: After reaching the target element, the event bubbles back up to the root of the DOM tree.   
// You can control the propagation of events using methods like `stopPropagation()` to prevent further propagation in either phase, or `stopImmediatePropagation()` to stop the event from being handled by any other listeners on the same element.    
// exmaple of event propagation:
// ```js
// document.getElementById('parent').addEventListener('click', function() {
//   console.log('Parent clicked');
// });        
// document.getElementById('child').addEventListener('click', function(event) {
//   console.log('Child clicked');
//   event.stopPropagation(); // Prevents the event from bubbling up to the parent
// });  
// ```
 