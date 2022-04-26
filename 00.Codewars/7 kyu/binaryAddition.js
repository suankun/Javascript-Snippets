function addBinary(a, b) {
  let sum = a + b;
  let dec = sum.toString(2);
  return dec;
}

// Alternative solution:
function addBinary(a, b) {
  return (a + b).toString(2);
}
