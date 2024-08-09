// If the paramaters of functions are same then we need to cahce the result of the previous function somewhere
function myMemoize(fn) {
    
}
const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 1000000000; i++) {}
  return num1 + num2;
};

console.time("First Call");
console.log(clumsySquare(9399, 7343));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsySquare(9399, 7343));
console.timeEnd("Second Call");
