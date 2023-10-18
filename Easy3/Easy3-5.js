function triangle(num) {
  let stars = '*';
  let spaces = '                                               '
  for (let i = 1; i <= num; i++) {
    console.log(spaces.slice(i, num) + stars);
    stars += '*';
  }
}

triangle(5);
triangle(9);
triangle(20);