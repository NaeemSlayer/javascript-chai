// reduce

const myNum = [1, 2, 3];

// const myTotal = myNum.reduce( (acc, currval) => {
//     console.log(`Acc: ${acc} and currval: ${currval}`);

//     return acc + currval
// }, 0)

// const myTotal = myNum.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 9999,
  },
  {
    itemName: "mobile dev",
    price: 6999,
  },
  {
    itemName: "data science",
    price: 11999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
