// =================== Immediately Invoked Function Expressions (IIFE) ===================

// IIFE is a function that runs immediately after it's defined
// Useful for avoiding global scope pollution

// Syntax: (function definition)(execution)

// Named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();
// The `;` is necessary to end the IIFE if another IIFE follows or other expressions start

// Arrow Function IIFE (Anonymous IIFE)
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Naeem");

// Why use IIFE?
// - To execute code immediately
// - To isolate variable/function scope and avoid polluting the global namespace

// chai("Naeeeem"); // ❌ Error: chai is not defined in global scope
// Named IIFEs are not accessible outside their own scope
