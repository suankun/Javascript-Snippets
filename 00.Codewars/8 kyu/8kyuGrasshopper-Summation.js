var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Alternative solution:
const summation = n => n * (n + 1) / 2;
