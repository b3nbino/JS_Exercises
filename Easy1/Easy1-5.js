//Create a simple tip calculator.
//The program should prompt for a bill amount and a tip rate.
//The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
//You can ignore input validation and assume that the user will enter numbers.

let rlSync = require('readline-sync');
let bill = Number.parseFloat(rlSync.question('What is the Bill?'));
let tipPercent = Number.parseInt(rlSync.question('What is the tip percentage?'));

function calcTotal(bill, tip) {
  let tipTotal = bill * (tip / 100);
  let total = bill + tipTotal;

  console.log(`The tip is $${tipTotal.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

calcTotal(bill, tipPercent);