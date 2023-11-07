function stringy(num) {
  let bin = "1";

  for (let i = 0; i < num - 1; i++) {
    if (bin[i] === "1") {
      bin += "0";
    } else {
      bin += "1";
    }
  }

  return bin;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
