// for the given user object flatten into a simpler one for example like
// output 1
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
  
  function flattenObject(obj, prefix = "") {
    let result = {};
   for(let key in obj){
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
        result ={
            ...result,
        ...flattenObject(obj[key],`${prefix}${key}_`)
        }
    }else{
        result[`${prefix}${key}`] = obj[key]
    }
   }

    return result;
   
  } // Flatten the user object with "user_" prefix
  
  const flattenedUser = flattenObject(user, "user_");
  console.log(flattenObject(user, "user_"));
  
  
