// Immediately Invoked Function Expressions (IIFE)
/* jo function immediately execute ho jai
 global scope ke pollution se problem hoti hai, to us global scope ke jo variables hai
ya jo bhi wahan declaration hai uske pollution ko hatane ke liye IIFE ka use kia */

// 2 IIFE ek sath
(function chai() {
    // named IIFE 
  console.log(`DB CONNECTED`);
})();

( (name) => {
    // un-named IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Naeem"); 