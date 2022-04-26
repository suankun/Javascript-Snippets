function divisors(integer) {
  let arr = new Array();

  for (let i = 2; i * i <= integer; ++i)
    if (integer % i == 0) {
      arr.push(i);
      if (i != integer / i) {
        arr.push(integer / i);
      }
    }
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr.length === 0) {
    return `${integer} is prime`;
  } else {
    return arr;
  }
}

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

// Alternative solution:
function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}
