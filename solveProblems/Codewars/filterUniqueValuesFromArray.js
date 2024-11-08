const employeObj = [
  {
    name: "Harish",
  },
  {
    name: "Suresh",
  },
  {
    name: "Suresh",
  },
  {
    name: "Ramesh",
  },
  {
    name: "Ramesh",
  },
  {
    name: "David",
  },
  {
    name: "Jason",
  },
];

// Filter unique array

const uniqueArray = employeObj.filter(
  (obj, index, self) => index === self.findIndex((o) => o.name === obj.name)
);
// using set

// const uniqueArray = [];
// const namesSet = new Set();

// test.forEach((obj) => {
//   if (!namesSet.has(obj.name)) {
//     namesSet.add(obj.name);
//     uniqueArray.push(obj);
//   }
// });

console.log(uniqueArray, "obj");
