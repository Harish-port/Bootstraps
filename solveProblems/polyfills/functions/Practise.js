//
let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

Function.prototype.MyCall = function (context, args) {
  if (typeof this !== "function") {
    return new Error(this + "this is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.MyCall(car1, 23, 3);
