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
  if (items.langfileName == "js" || items.langfileName == "py") {
    // return console.log(items.langName);
  }
  // return console.log(items.langName, ":", items.langfileName);
});

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num = myNums.filter((value) => {
//   return value === 2;
// });
// console.log(num);

// const numsFN = (value) => {
//   const num = myNums.filter((val) => {
//     return val === value;
//   });
//   return num;
// };

// console.log(numsFN(10));

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(myTotal);

const shopingCart = [
  {
    title: "js course",
    price: 2999,
  },
  {
    title: "py course",
    price: 6999,
  },
  {
    title: "java course",
    price: 5999,
  },
  {
    title: "php course",
    price: 7999,
  },
];

const totlePriceToPay = shopingCart.reduce((acc, items) => {
  return acc + items.price;
}, 0);

console.log(totlePriceToPay);
