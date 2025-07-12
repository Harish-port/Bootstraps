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

const flattenedUser = (obj, prefix) => {
  let falttenedObj = {};
  for (let key of obj) {
    if (obj[key] === 'object' && (!Array.isArray(obj[key]))) {
      falttenedObj = {
        ...flattenObj,
        ...flattenedUser(obj[key], `${prefix}${key.chart(0).toUpperCase() + key.slice(1)}`)
      }
    } else {
      falttenedObj[`${prefix}${key}`] = obj[key]
    }
  }
  return falttenedObj;
}
// // output 2
// {
//   userName: "Rowdy Coders",
//   userAddressPrimaryHouse: "109",
//   userAddressPrimaryStreetMain: 21,
//   userAddressPrimaryStreetCross: ["32", "1"],
//   }
console.log(flattenedUser(user, "user"));



