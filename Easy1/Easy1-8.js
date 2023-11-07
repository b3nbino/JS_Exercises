//et rlSync = require('readline-sync');
//let year = Number.parseInt(rlSync.question('Please enter a year to determine if it is a leap year:'));

function isLeapYear(num) {
  if (num % 100 === 0) {
    if (num % 400 === 0) {
      return true;
    }
    return false;
  } else if (num % 4 === 0) {
    return true;
  }
  return false;
}

//console.log(isLeapYear(year));
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
