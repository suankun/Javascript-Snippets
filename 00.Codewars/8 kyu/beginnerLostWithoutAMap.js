function maps(x) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}

maps([1, 2, 3]); // [2, 4, 6]
maps([4, 1, 1, 1, 4]); // [8, 2, 2, 2, 8]
maps([2, 2, 2, 2, 2, 2]); // [4, 4, 4, 4, 4, 4]

// Alternative solution:
function maps(x) {
  return x.map((n) => n * 2);
}
