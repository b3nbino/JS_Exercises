/*
 * Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5.
 * For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 */

//Computes sum of numbers previous, divisible by 3 or 5
function multisum(num) {
  if (num === 0) return num; //Stopping condition

  //If a number is divisible by 3 or 5, returns that number and adds it to total
  if (num % 3 === 0 || num % 5 === 0) {
    return num + multisum(num - 1);
  }

  //If a number is not divisible by 3 or 5 checks next number
  return multisum(num - 1);
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
