// The Javascript for in statement loops through the properties of an object
// Syntax
for (key in object) {
}

// Example

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text, "text");
// Output:John Doe 25

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

for (variable of iterable) {
  //code block to be executed
}

const cars = ["BMW", "VOLVO", "MINI"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}
// Output :
// BMW
// VOLVO
// MINI
