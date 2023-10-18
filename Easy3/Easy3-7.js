function twice(num) {
  let numString = String(num); //Coerce argument into string
  let firstHalf = numString.slice(0, (numString.length / 2)) //Make variable with first half of the number
  let secondHalf = numString.slice((numString.length / 2), numString.length) //Make variable with second half of the number

  if ((numString.length % 2) !== 0) { //If number has an odd amount of digits always return double
    return num * 2;
  }
  if (firstHalf === secondHalf) { //If the first half and second half are the same, return the number
    return num;
  }
  return num * 2; //If even amount of digits but not the same on both sides, return double
}

console.log(twice(37));      //74
console.log(twice(44));      //44
console.log(twice(334433));  //668866
console.log(twice(444));     //888
console.log(twice(107));     //214
console.log(twice(103103));  //103103
console.log(twice(3333));    //3333
console.log(twice(7676));    //7676

