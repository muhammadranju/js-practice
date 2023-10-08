const userAbout = [];

const users = [];

const addUser = {
  name: "Md Ranju",
  age: 20,
  jobTitle: "Software developer at Node.js",
  workTime: "10AM-06PM",
};

console.log(Object.keys(addUser).length);
if (Object.keys(addUser).length) {
  userAbout.push(addUser);
} else {
  console.log("Invalid user object");
}
console.log(userAbout);
