//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34565435654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["sentry", "poison ivy", "homelander"];
let myObj = {
    name: "name",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive) 

let myUsername = "mnhu.com"

let anotherName =  myUsername
anotherName = "fkse"

console.log(myUsername);
console.log(anotherName);

let userOne = 
{
    email: "user@goodgle.com",
    upi: "use@ybl"
}

let userTwo = userOne

userTwo.email = "naeem@byd.com"

console.log(userOne.email);
console.log(userTwo.email);
