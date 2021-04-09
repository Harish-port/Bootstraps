// The forEach() method calls a function once for each element in an array, in order.

// Note: the function is not executed for array elements without values.

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

items.forEach((item) => {
  console.log(item.name);
});
