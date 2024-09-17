const user = {
    username: "Naeem",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);        
        console.log(this);        
    }

} 

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Naeem"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Naeem"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Naeem"
    console.log(this);
}

// chai()

// basic arrow  (explicit return)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  ({username: "Naeem"})

// console.log(addTwo(3,4))

// const myArray =  [2, 5, 3, 7]

// myArray.forEach(() => ())