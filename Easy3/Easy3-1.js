function crunch(string) {
  let newString = '';
  let j = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[j]) {
      j++
      continue;
    } else {
      newString += string[i];
    }
    j++;
  }

  return newString;
}


console.log(crunch('ddaaiillyy ddoouubbllee')); //daily double
console.log(crunch('4444abcabccba'));           //4abcabcba
console.log(crunch('ggggggggggggggg'));         //g
console.log(crunch('a'));                       //a
console.log(crunch(''));                        //' '