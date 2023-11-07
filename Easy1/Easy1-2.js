//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let i = 0; i <= 99; i += 1) {
  if (i % 2 === 1) console.log(i);
}

function oddPrinter(lowerLimit, upperLimit) {
  for (let i = lowerLimit; i <= upperLimit; i += 1) {
    if (i % 2 === 1) console.log(i);
  }
}
