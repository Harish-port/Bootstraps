
// The every() method checks if all elements in an array pass a test (provided as a function).

// The every() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.

// Note: every() does not change the original array

const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 15 },
    { name: "Phone", price: 400 },
    { name: "Computer", price: 75 },
    { name: "Keyboard", price: 24 },
    { name: "Laptop", price: 1000 },
  ];
  const hasInexpensiveItems = items.every((item)=>{
    return item.price <= 100
})
const hasInexpensiveItems1 = items.every((item)=>{
    return item.price <= 1000
})
console.log(hasInexpensiveItems);//false
console.log(hasInexpensiveItems1);//true
