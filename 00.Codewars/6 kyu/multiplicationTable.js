multiplicationTable = function (size) {
  let res = [];
  for (let i = 1; i <= size; i++) {
    let tempRes = [];
    for (let j = 1; j <= size; j++) {
      tempRes.push(i * j);
    }
    res.push(tempRes);
  }
  return res;
};

multiplicationTable(3); // [[1,2,3], [2,4,6], [3,6,9]]

// Alternative solution:
multiplicationTable = function (size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};
