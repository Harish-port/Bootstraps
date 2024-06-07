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
  let flattened = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattened = {
        ...flattened,
        ...flattenObject(obj[key], `${prefix}${key}_`),
      };
    } else {
      flattened[`${prefix}${key}`] = obj[key];
    }
  }
  return flattened;
} // Flatten the user object with "user_" prefix

const flattenedUser = flattenObject(user, "user_");
console.log(flattenedUser);
const flattenObj = (obj, parentKey) => {
  let result = {};
  for (key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result = {
        ...result,
        ...flattenObj(
          obj[key],
          `${parentKey}${key.charAt(0).toUpperCase() + key.slice(1)}`
        ),
      };
    } else {
      result[`${parentKey}${key.charAt(0).toUpperCase() + key.slice(1)}`] =
        obj[key];
    }
  }
  return result;
};

console.log(flattenObj(user, "user"), "result");
// // output 2
// {
//   userName: "Rowdy Coders",
//   userAddressPrimaryHouse: "109",
//   userAddressPrimaryStreetMain: 21,
//   userAddressPrimaryStreetCross: ["32", "1"],
//   }
