// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello world!";
for (const greet of greeting) {
  //   console.log(`Each char is: ${greet}`);
}

// Maps
// used for unique values

const map = new Map();
map.set("PK", "Pakistan");
map.set("AFG", "Afghanistan");
map.set("KOR", "South Korea");
map.set("PK", "Pakistan");

// console.table(map);

for (const [key, value] of map) {
  //   console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "CS",
  game3: "COD",
};

// wont work
for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
}
