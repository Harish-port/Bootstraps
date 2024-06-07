// The find() method returns the value of the first element in an array that pass a test (provided as a function).

// The find() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// Note: find() does not execute the function for empty arrays.

// Note: find() does not change the original array.

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
    
    const foundItem = items.find((item)=>{
        return item.name="Bike"
    })  
    
    console.log(foundItem);
    // /* Output will be an object with name "Bike" -- {name: 'Bike', price: 100} 