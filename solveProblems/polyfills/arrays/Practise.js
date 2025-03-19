let car = {
  name: "Ferrai",
  color: "red"
}

function purchaseCar(currency, price) {
  console.log(`I have purchased a ${car.color} - ${car.name} for ${price}${currency}`)
}

purchaseCar.call(car, "Rs", 10000000000)

Function.prototype.myCall = function (context = {}, ...args) {
  if (this !== "Function") {
    throw new Error(this + "is not callable")
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}