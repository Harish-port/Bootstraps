// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.

const items = [
{name:"Bike",price:100},
{name:"TV",price:200},
{name:"Album",price:10},
{name:"Book",price:15},
{name:"Phone",price:400},
{name:"Computer",price:75},
{name:"Keyboard",price:24},
{name:"Laptop",price:1000},
];

const filteredItems = items.filter((item)=>{
    return item.price <= 100
})

console.log(filteredItems);