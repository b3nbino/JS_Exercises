function xor(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true