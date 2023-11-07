function oddities(array) {
  let odds = [];
  for (let i = 0; i < array.length; i += 2) {
    odds.push(array[i]);
  }
  return odds;
}
function evenites(array) {
  let evens = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenites([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenites([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenites(["abc", "def"])); // logs ['def']
console.log(evenites([123])); // logs []
console.log(evenites([])); // logs []
