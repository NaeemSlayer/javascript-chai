// singleton :constuctor se agar abne ga to singleton bane ga

// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Naeem",
    "full name": "Naeem Alam",
    [mySym]: "mykey1",
    age: 25,
    location: "Karachi",
    email: "naeem@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Wednesday", "Thursday"]
}

// acess methods for objects
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
