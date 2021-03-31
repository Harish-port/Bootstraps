//? Note:
//* 1. Even if the API throws an error, fetch will succeed
//* 2. Fetch will throw error when there is some issue with fetch itself or network

fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json(); // This is a promise
  })
  .then((data) => {
    console.log(data);
  });
