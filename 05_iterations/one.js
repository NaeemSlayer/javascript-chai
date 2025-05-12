// for loop

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best");
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer Loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner Loop ${j} & outer loop ${i}`);
    // console.table(`${i} * ${j} = ${i * j}`);
  }
}

let myArr = ["Fox", "Bat", "Spider"];
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log(`Found 5`);
    break;
  }
  //   console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log(`found and skipped 5`);
    continue;
  }
  //   console.log(i);
}
