let rlSync = require('readline-sync');
let userIn1 = Number.parseInt(rlSync.question('Enter the first number:'));
let userIn2 = Number.parseInt(rlSync.question('Enter the second number:'));

function operations(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

operations(userIn1, userIn2);