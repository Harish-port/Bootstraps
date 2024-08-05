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

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car1, "Rs.", 500000);

