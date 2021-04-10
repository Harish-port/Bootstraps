
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
  const total = items.reduce((currentTotal,item)=>{
    return item.price + currentTotal
},0)

console.log(total);//1840 

// currentTotal is 0, so 100 + 0 =100 
// next iteration ---- 200 + 100 =300