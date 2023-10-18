//Write a program that asks the user to enter an integer greater than 0,
//then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync');

let userNum = parseInt(rlSync.question('Please enter an integer greater than 0:'));
if (userNum < 1) console.log('Please enter an INTEGER GREATER THAN 0 (ZERO)');

let s_or_p = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product:'); //Sum or Product

function sumPrevious(num) { //Computes sum
  if (num === 0) return num;
  return num + sumPrevious(num - 1);
}

function multPrevious(num) { //Computes product
  if (num === 1) return num;
  return num * multPrevious(num - 1);
}



if (s_or_p === 's') { //Determines and executes appropriate action
  let result = sumPrevious(userNum);
  console.log(`The sum of the integers between 1 and ${userNum} is ${result}.`);
} else if (s_or_p === 'p') {
  let result = multPrevious(userNum);
  console.log(`The product of the integers between 1 and ${userNum} is ${result}.`);
} else {
  console.log('PLEASE enter either "s" or "p" :(')
}