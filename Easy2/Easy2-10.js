let rlSync = require('readline-sync');

let age = rlSync.question('What is your age?');
let retirementAge = rlSync.question('At what age would you like to retire?');

let yearsUntilRetirement = retirementAge - age;
let today = new Date();
let year = today.getFullYear();
let retirementYear = year + yearsUntilRetirement;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsUntilRetirement} years of work to go!`);