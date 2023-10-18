function logInBox(string) {
  let line = '+-';
  let space = '| ';

  for (let i = 0; i < string.length; i++) { //Creates top and bottom borders according to string length
    line += '-';
    space += ' ';
  }
  line += '-+';
  space += ' |';

  console.log(line);
  console.log(space);
  console.log(`| ${string} |`);
  console.log(space);
  console.log(line);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');