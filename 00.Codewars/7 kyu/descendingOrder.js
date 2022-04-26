function descendingOrder(n) {
  const intArr = Array.from(String(n));

  const highestToLowest = intArr.sort((a, b) => b - a);

  const num = parseInt(highestToLowest.join(""));

  return num;
}

// Alternative solution:
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
