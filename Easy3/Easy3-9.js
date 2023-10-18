function cleanUp(string) {
  let symbols = /[^a-z]/gi; //all characters not in the Alphabet globally 
  let white = /\s+/g; //all consecutive whitespace
  return string.replace(symbols, ' ').replace(white, ' ');
}

console.log(cleanUp("---what's my +*& line?"));