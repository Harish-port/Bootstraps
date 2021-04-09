
// The some() method checks if any of the elements in an array pass a test (provided as a function).

// The some() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// Otherwise it returns false
// Note: some() does not execute the function for array elements without values.

// Note: some() does not change the original array.

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
  

  const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 100
})
const hasInexpensiveItems1 = items.some((item)=>{
    return item.price <= 0
})
console.log(hasInexpensiveItems);//true
console.log(hasInexpensiveItems1);//false
