// =================== Object with Method & `this` Keyword ===================

const user = {
  username: "naeem",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    // `this` refers to the current object (`user`)
    // console.log(this); // Shows the whole `user` object
  },
};

// user.welcomeMessage(); // Output: naeem, welcome to the website

// Changing the context
// user.username = "sam";
// user.welcomeMessage(); // Output: sam, welcome to the website

// =================== Global `this` ===================

// In Node.js (server-side JS), `this` in global scope refers to an empty object
// console.log(this); // Output: {}

// In the browser, `this` in global scope refers to the `window` object,
// which gives access to things like `window.alert`, `window.document`, etc.

// =================== `this` Inside Regular Function ===================

function chai() {
  let username = "naeem";
  console.log(this.username); // Output: undefined
  // `this` doesn't refer to the function's own variables
}

// chai(); // Uncomment to run

// =================== Arrow Functions and `this` ===================

// Arrow functions don't have their own `this` — they inherit it from their lexical scope
const chaiArrow = () => {
  let username = "naeem";
  console.log(this); // Output: {} (in Node.js)
  console.log(this.username); // Output: undefined
};

// chaiArrow(); // Uncomment to run

// =================== Arrow Function Syntax ===================

// 1. Standard Arrow Function with return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// 2. Implicit return (no curly braces or `return`)
const addTwo = (num1, num2) => num1 + num2;

// 3. Implicit return with parentheses (good for returning objects)
const returnObject = (num1, num2) => ({ username: "naeem" });

// console.log(addTwo(3, 4));       // Output: 7
// console.log(returnObject(3, 4)); // Output: { username: "naeem" }
