function remainder(n, m) {
  if (n > m) {
    return n % m;
  } else if (m > n) {
    return m % n;
  } else if (n === 0 || m === 0) {
    return NaN;
  } else if (n < 0 || m < 0) {
    return 0;
  }
}

// Alternative solution:
function remainder(a, b) {
  return a > b ? a % b : b % a;
}
