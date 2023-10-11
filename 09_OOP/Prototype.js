const myName = "Md Ranju";

Object.prototype.showName = function () {
  return `This your properties is ${this} and your length is ${this.length}`;
};

console.log(myName.showName());

const arr = [1, 2, 3, 4];
console.log(arr.showName());
