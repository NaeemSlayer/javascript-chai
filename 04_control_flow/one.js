// control flow or logic flow
// the whole code should not always be executed, it should instead run on conditional basis

// 1. if statement
const isLoggedIn = true;
const temprature = 41;
// if (temprature < 50) {
//   console.log(`temprature less than 50`);
// }

// comparison operators
// <, >, <=, >=, =, =!, ==, !==, ===

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User power = ${power}`);
// }
// console.log(`User power = ${power}`);

// shorthand notation
// const balance = 1000
// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2");

// nested conditions
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged In");
}
