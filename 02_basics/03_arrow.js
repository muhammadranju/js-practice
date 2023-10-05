const arr = { gfj: "df" };
// const arr = [25];
// console.log(arr);
// console.log(Object.keys(arr));

// if (Object.keys(arr).length !== 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }
const coding = ["js", "roby", "java", "python", "cpp"];
// const codes = coding.forEach((value) => {
//   // return value;
//   console.log(value);
// });

const codes = coding.map((value) => {
  return value;
  //   console.log(value);
});
// console.log(codes);

const myCoding = [
  {
    langName: "JavaScript",
    langfileName: "js",
  },
  {
    langName: "Java",
    langfileName: "java",
  },
  {
    langName: "Pyrhon",
    langfileName: "py",
  },
];

myCoding.forEach((items) => {
  console.log(items.langName, ":", items.langfileName);
});
