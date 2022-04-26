const dataReverse = (data) => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

// Alternative solution:
// function dataReverse(data) {
//   let a = [];
//   while (data.length) a.unshift(...data.splice(0, 8));
//   return a;
// }
dataReverse([
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
]);
