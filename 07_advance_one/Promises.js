const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

const URL = "https://jsonplaceholder.typicode.com/users/1";

// async function getAllUsers() {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
