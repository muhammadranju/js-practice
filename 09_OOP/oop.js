// const oop = {
//   user: {
//     name: "Md Ranju",
//     email: "muhamadranju@gmial.com",
//     phone: `0${17000000}`,
//   },
//   address: {
//     country: "Bangladesh",
//     city: "Rajshahi",
//     state: "Rajshahi",
//     zipCode: 6000,
//   },
//   username: function () {
//     let username = this.user.name;
//     username = username.split(" ").join("").toLowerCase();
//     console.log(this);
//     return `This is username ${username}`;
//   },
//   email: function () {
//     let email = this.user.email;
//     return `This is user email ${email}`;
//   },
// };

// console.log(oop.username());
// console.log(oop.email());

// this is constructor function
function User(username, email, loginCount, isLoggedIn) {
  this.username = username;
  this.email = email;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const one = new User("muhammadranju", "muhamadranju@gmail.com", 12, true);
const two = new User("mdranju", "mdranju@gmail.com", 11, false);
console.log(one);
console.log(two);
