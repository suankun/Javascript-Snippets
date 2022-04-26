function grow(x) {
  let num = x.sort((a, b) => a - b);
  let multiply = 1;
  for (let i = 0; i < x.length; i++) {
    multiply *= x[i];
  }
  return multiply;
}

// Alternative solution:
const grow = (x) => x.reduce((a, b) => a * b);
