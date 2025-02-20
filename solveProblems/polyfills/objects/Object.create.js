// ## Object.create

// ** Definition:**

// Its used to create a new object using an existing object.

//  Syntax

// Object.create(proto,propertiesObject);

//Core logic
// yourFunction.prototype = proto;

//js

Object.prototype.customCreateObject = function (proto) {
  if (proto === null || typeof proto !== "object") {
    throw new Error("Argument must be an object");
  }
  // empty function
  function F() {}
  // prototype chaining with proto as the value
  F.prototype = proto;
  // return the new function
  return new F();
};

const obj1 = {
  key: 1,
  sayHello() {
    return "Hello";
  },
};

const newObj1 = Object.customCreateObject(obj1);
console.log(newObj1,"newObj1");
console.log(newObj1.sayHello(),"newObj1");
console.log(newObj1.key,"newObj1");

