//Call method in js is used to manipulate this keyword
// In order to borrow methods, call,apply and bind methods are used.

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}
// Steps to remember
// 1. check for edge cases that is check if this is a function or not
// 2. assign this to context object since purchaseCar is function here
// 3. so that any this keyowrd inside purchasecar will point to context object
// 4. since bind method return a function which is not invoked immediately, create a annoynomus function with newArgs and spread it
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
// const newFunc = purchaseCar.bind(car1);
const newFunc = purchaseCar.myBind(car1);
console.log(newFunc("Rs.", 500000));
