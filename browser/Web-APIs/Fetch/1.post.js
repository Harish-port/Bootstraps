fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    //? You need to stringify the body
    name: "Manoj",
  }),
})
  .then((response) => {
    return response.json(); // This is a promise
  })
  .then((data) => {
    console.log(data);
  });
