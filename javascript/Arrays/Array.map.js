// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.

// Note: this method does not change the original array.
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
    
    const itemNames = items.map((item)=>{
        return item.name
    })
    
    console.log(itemNames);