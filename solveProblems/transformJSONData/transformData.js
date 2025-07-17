const obj = [
    {
        key: "Spark 1",
        data: "data 1"
    },
    {
        key: "Spark 1",
        data: "data 1"
    },
    {
        key: "Spark 2",
        data: "data 1"
    },
    {
        key: "Spark 2",
        data: "data 1"
    },
    {
        key: "Spark 3",
        data: "data 1"
    },
    {
        key: "Spark 4",
        data: "data 1"
    }
];


let output = {};

obj.forEach(item => {
    if (output[item.key]){
        output.push(item)
    }else{
        output[item.key] = [item]
    }
});
console.log(output);


const items = [
  { key: 'id', data: '101' },
  { key: 'name', data: 'Alice' },
  { key: 'id', data: '102' },
  { key: 'name', data: 'Bob' },
  { key: 'email', data: 'alice@example.com' }
];

const outputResult = (items) => {
  let output = {}
  items.forEach((item) => {
    if (output[item.key]) {
      if (Array.isArray(output[item.key])) {
        output[item.key].push(item.data)
      } else {
        output[item.key] = [output[item.key], item.data]
      }
    } else {
      output[item.key] = item.data;
    }
  })
  return output
}
// function test(items) {
//     let output = {};

//     items.forEach((item) => {
//         if (output[item.key]) {
//             // Key already exists
//             if (Array.isArray(output[item.key])) {
//                 // Already an array → just push the new value
//                 output[item.key].push(item.data);
//             } else {
//                 // Convert single value to array with both values
//                 output[item.key] = [output[item.key], item.data];
//             }
//         } else {
//             // First time seeing this key → assign directly
//             output[item.key] = item.data;
//         }
//     });

//     return output;
// }

let res = 
outputResult(items);
console.log(res);