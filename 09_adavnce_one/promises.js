const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

// shorten way
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Naeem", email: "thekhan820@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Naeem", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // how to avoid callback hell
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Faarah", password: "456" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  }, 1000);
});

async function consumePromiseFive() {
  // promise is an eventual completion object
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .catch((error) => console.log(error))
  .then((data) => console.log(data));

// promise.all
// yes this is also available, kuch reading aap b kro.
