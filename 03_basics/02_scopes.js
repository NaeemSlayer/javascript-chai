// =================== Variable Declarations ===================

// `let` and `const` are block-scoped and preferred over `var`
// Avoid using `var` as it is function-scoped and can lead to bugs or security issues

let a = 300;

if (true) {
  let a = 10; // Block scope, separate from the `a` above
  const b = 20; // `const` is also block-scoped

  // var c = 30;       // Avoid using `var`
  // console.log("INNER:", a);  // Output: 10
}

// console.log(a);     // Output: 300 (outer scope `a`)
// console.log(b);     // Error: `b` is not defined outside its block
// console.log(c);     // Error: `c` is not defined (if declared with var, would be accessible)

// =================== Nested Scope Example ===================

function one() {
  const username = "naeem";

  function two() {
    const website = "youtube";
    console.log(username); // Accesses parent scope variable: "naeem"
  }

  // console.log(website); // Error: `website` is only available inside function `two`

  // two(); // Uncomment to execute and print "naeem"
}

// one(); // Uncomment to execute function `one`

// =================== Scope in if Statements ===================

if (true) {
  const username = "naeem";

  if (username === "naeem") {
    const website = " youtube";
    // console.log(username + website); // Output: "naeem youtube"
  }

  // console.log(website); // Error: `website` is not accessible here
}

// console.log(username); // Error: `username` is not accessible outside the block

// =================== Function Declarations vs Expressions ===================

// Function Declaration
function addOne(num) {
  return num + 1;
}

console.log(addOne(5)); // Output: 6
// Function declarations are hoisted (can be called before they are defined)

// Function Expression (anonymous function assigned to a variable)
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); // Output: 7
// console.log(addTwo(5)) before declaration would throw an error due to lack of hoisting
