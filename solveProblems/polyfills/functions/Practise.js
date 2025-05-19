let car = {
  color: "red",
  company: "ferrari"
}

function purchaseCar(price, curreny) {
  console.log(`I have purchased the ${this.color} - ${this.company} for ${curreny} ${price}`);
}

Function.prototype.myCustomBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "It's not callable")
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...newArgs, ...args)
  }
}


purchaseCar.call(car, [1000, "Rs"])