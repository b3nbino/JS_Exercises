function century(year) {
  let century = 0;
  if (year % 100 !== 0) {
    //Determines century
    century = String(Math.floor(year / 100) + 1);
  } else {
    century = String(year / 100);
  }

  if (Math.floor(year / 100 + 1) > 10 && Math.floor(year / 100 + 1) < 14) {
    century += "th";
    return century;
  } else if (century.endsWith("2")) {
    century += "nd";
    return century;
  } else if (century.endsWith("3")) {
    century += "rd";
    return century;
  } else if (century.endsWith("1")) {
    century += "st";
    return century;
  }

  return (century += "th");
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
