//Build a program that asks the user to enter the length and width of a room in meters, 
//and then logs the area of the room to the console in both square meters and square feet.

let rlSync = require('readline-sync');
let length = rlSync.question('Please enter the length of the room in meters:');
let width = rlSync.question('Please enter the width of the room in meters:');

function calcArea(length, width) {
  let areaM = length * width;
  let areaF = (length * 3.28084) * (width * 3.28084);

  console.log(`The area of the room is ${(areaM).toFixed(2)} square meters (${(areaF).toFixed(2)} square feet)`);
}

calcArea(length, width);
