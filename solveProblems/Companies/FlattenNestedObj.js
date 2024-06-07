// for the given user object flatten into a simpler one for example like
//    {
//     user_name: "Rowdy Coders",
//     user_address_primary_house: "109",
//     user_address_primary_street_main:21,
//     user_address_primary_street_cross: ["32", "1"],
//     }
// forexmaple - Recursive function
// Recursive function has 2 conditions
// 1. Base condition which is a stopping condition
// 2. Recursive call to that function
const user = {
  name: "Rowdy Coders",
  address: {
    primary: {
      house: "109",
      street: {
        main: 21,
        cross: ["32", "1"],
      },
    },
  },
};

const flattenObj = (obj) => {
  const result = {};
  for(key in obj){
    if(typeof obj[key] === 'obj'){
      
    }
  }
  return result;
};

console.log(flattenObj(user), "result");
