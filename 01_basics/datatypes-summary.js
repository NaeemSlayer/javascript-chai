// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 54564645464544444n

// Reference (Non primitive)

// Array, Objects, Functions, 

const heros = ["superman", "batman", "spiderman"]
let myObj = {
    name: "naeem",
    age: 24,
}

const myFunction = function() {
    console.log("Hello world");
}

// console.log(typeof myFunction);

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



// ************ Memory *************
// Stack (Primitive), Heap (Non-Primitive)

// stack ke andar jab bhi kuch lain ge to us main apko ek copy milta
// heap ke andar jab value rakhte hai to apko reference milta hai

let myYoutubeName = "NaeemSlayer"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "naeem@google.com"

console.log(userOne.email);
console.log(userTwo.email);
