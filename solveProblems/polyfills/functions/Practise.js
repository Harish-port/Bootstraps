//
let car1 = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(`i have purchased ${this.color} ferrari for ${currency}`);
}
Function.prototype.myCallPolyFill = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
 
  context.fn = this;
  return function(...newArgs){
    return context.fn(...args,...newArgs)
  }

};
