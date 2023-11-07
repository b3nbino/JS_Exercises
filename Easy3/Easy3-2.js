function logInBox(string) {
  let line = "+-";
  let space = "| ";

  for (let i = 0; i < string.length; i++) {
    //Creates top and bottom borders according to string length
    line += "-";
    space += " ";
  }
  line += "-+";
  space += " |";

  console.log(line);
  console.log(space);
  console.log(`| ${string} |`);
  console.log(space);
  console.log(line);
}

function logInBox2(string, size) {
  let line = "+-";
  let space = "| ";

  //Truncates string or makes longer
  let shortString = string.split("");
  let newString = "";
  if (shortString.length > size) {
    shortString.length = size;
    newString = shortString.join("");
  } else if (shortString.length < size) {
    newString = shortString.join("").padStart(size - shortString.length, " ");
  }

  //Creates top and bottom borders according to string length
  for (let i = 0; i < size; i++) {
    line += "-";
    space += " ";
  }
  line += "-+";
  space += " |";

  console.log(line);
  console.log(space);
  console.log(`| ${newString} |`);
  console.log(space);
  console.log(line);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
logInBox2("To boldly go where no one has gone before.", 25);
logInBox2("", 10);
