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
  let flattenedObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenedObj = {
        ...flattenedObj,
        ...flattenedUser(
          obj[key],
          `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`
        ),
      };
    } else {
      flattenedObj[`${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`] =
        obj[key];
    }
  }
  return flattenedObj;
};

console.log(flattenedUser(user, "user"));



