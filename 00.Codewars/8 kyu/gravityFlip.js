const flip = (d, a) => {
  if (d == "R") {
    a.sort((a, b) => a - b);
  } else {
    a.sort((a, b) => b - a);
  }
  return a;
};

flip("R", [3, 2, 1, 2]); // [1, 2, 2, 3]
flip("L", [1, 4, 5, 3, 5]); // [5, 5, 4, 3, 1]

// // Alternative solution:
// const flip = (d, a) => {
//   if (d === "R") return a.sort((a, b) => a - b);
//   if (d === "L") return a.sort((a, b) => b - a);
// };

// // Alternative solution:
// const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
