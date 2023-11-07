//Build a program that asks the user to enter the length and width of a room in meters,
//and then logs the area of the room to the console in both square meters and square feet.

//Get units, and measurements
let rlSync = require("readline-sync");
let units = rlSync.question("Would you like to use 'feet' or 'meters'?");
while (units !== "feet" && units !== "meters") {
  units = rlSync.question("Please enter either 'feet' or 'meters'.");
}
let length = rlSync.question("Please enter the length of the room:");
let width = rlSync.question("Please enter the width of the room:");

//Calculates area for both types of units and displays according to the users choice
function calcArea(length, width) {
  const feetConversion = 3.28084;
  let areaF;
  let areaM;

  if (units === "meters") {
    areaM = length * width;
    areaF = length * feetConversion * (width * feetConversion);
    console.log(
      `The area of the room is ${areaM.toFixed(
        2
      )} square meters (${areaF.toFixed(2)} square feet)`
    );
  } else if (units === "feet") {
    areaF = length * width;
    areaM = (length / feetConversion) * (width / feetConversion);
    console.log(
      `The area of the room is ${areaF.toFixed(2)} square feet (${areaM.toFixed(
        2
      )} square meters)`
    );
  }
}

calcArea(length, width);
