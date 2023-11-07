let rlSync = require("readline-sync");
let noun = rlSync.question("Enter a noun:");
let verb = rlSync.question("Enter a verb:");
let adjective = rlSync.question("Enter a adjective:");
let adverb = rlSync.question("Enter a adverb:");

let line1 = `You ${verb} in your ${adjective} ${noun} ${adverb}? How could you do such a thing?!`;
console.log(line1);
