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

// purchaseCar.call(car1, "Rs.", 500000);
// car1 is the context
// rest are arguements

// Steps to remember
// 1. check for edge cases that is check if this is a function or not
// 2. assign this to context object since purchaseCar is function here
// 3. so that any this keyowrd inside purchasecar will point to context object
// 4. pass arguements to the function
Note: Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car1, "Rs.", 500000);
