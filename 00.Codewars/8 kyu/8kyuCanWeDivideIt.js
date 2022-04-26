function isDivideBy(number, a, b) {
  const num = Math.abs(number);
  const numA = Math.abs(a);
  const numB = Math.abs(b);

  if (num % numA === 0 && num % numB === 0) {
    return true;
  } else {
    return false;
  }
}

// Alternative solution:
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
