// const URL = "https://jsonplaceholder.typicode.com/users/1";
const URL = "https:api.github.com/users/muhammadranju";

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
