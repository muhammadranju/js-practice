function addTwoNumber(number1, number2) {
  if (!number1 || !number2) {
    typeof number1 === "number" && typeof number2 === "number";
    return console.log("not allow");
  }
  return number1 + number2;
}
// console.log(addTwoNumber(2, 3));

function calculateCartPrice(val1, val2, ...number) {
  return number;
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "Ranju",
  price: 399,
};

function handelObject(anyObject) {
  console.log(
    `Username is ${anyObject.username}, price is ${anyObject?.price}`
  );
}
handelObject(user);

const myArrays = [200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myArrays));
