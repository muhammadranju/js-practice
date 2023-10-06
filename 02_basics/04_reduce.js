const arrays = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 10],
];

const resultArrays = arrays.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

// console.log(resultArrays);

// const totalPriceByCategory = { Electronics: 90, Clothing: 85 };

// console.log(totalPriceByCategory);
// console.log(Object.values(totalPriceByCategory));

// const cartItems = [
//   { name: "Product 1", price: 20, quantity: 2, category: "Electronics" },
//   { name: "Product 2", price: 30, quantity: 1, category: "Clothing" },
//   { name: "Product 3", price: 15, quantity: 3, category: "Electronics" },
//   { name: "Product 4", price: 25, quantity: 2, category: "Clothing" },
// ];

// const totalPriceByCategory = cartItems.reduce((acc, curr) => {
//   const { price, quantity, category } = curr;
//   const totalPriceForItem = price * quantity;
//   if (!acc[category]) {
//     acc[category] = totalPriceForItem;
//   } else {
//     acc[category] += totalPriceForItem;
//   }
//   return acc;
// }, {});
// console.log(totalPriceByCategory);

// const result = Object.values(totalPriceByCategory).reduce(
//   (total, price) => total + price,
//   0
// );

// console.log(result);

const cartItems = [
  { name: "Product 1", price: 20, quantity: 2, category: "Electronics" },
  { name: "Product 2", price: 30, quantity: 1, category: "Clothing" },
  { name: "Product 3", price: 15, quantity: 3, category: "Electronics" },
  { name: "Product 4", price: 25, quantity: 2, category: "Clothing" },
];

const discounts = {
  Electronics: 0.1,
  Clothing: 0.05,
};

const shippingCost = 10;

const totalPriceByCategory = cartItems.reduce((acc, curr) => {
  const { price, quantity, category } = curr;
  const discount = discounts[category] || 0;
  const discountPrice = price * (1 - discount);
  const totalPriceForItem = discountPrice * quantity;

  if (!acc[category]) {
    acc[category] = totalPriceForItem;
  } else {
    acc[category] += totalPriceForItem;
  }
  return acc;
}, {});

console.log(totalPriceByCategory);

const overallTotalPrice = Object.values(totalPriceByCategory).reduce(
  (total, price) => total + price,
  0
);
const finalPrice = overallTotalPrice + shippingCost;

console.log(finalPrice);
