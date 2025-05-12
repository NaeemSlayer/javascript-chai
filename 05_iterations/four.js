const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  // console.log(`${key} shortcut for ${myObject[key]}`);
}

const progLang = ["js", "rb", "py", "java", "cpp"];

for (const key in progLang) {
  // console.log(key);
}

const map = new Map();
map.set("PK", "Pakistan");
map.set("AFG", "Afghanistan");
map.set("KOR", "South Korea");
map.set("PK", "Pakistan");

// wont work, as map is not iterateable so forin loop wont work on it
for (const key in map) {
  //   console.log(key);
}
