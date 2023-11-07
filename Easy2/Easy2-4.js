function multiply(num1, num2) {
  return num1 * num2;
}
function square(num) {
  return multiply(num, num);
}
function nthPower(num, power) {
  let result = num;
  for (let i = 1; i < power; i++) {
    result = multiply(num, result);
  }
  return result;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(nthPower(5, 3) === 125); //logs true
console.log(nthPower(3, 4) === 81); //logs true
