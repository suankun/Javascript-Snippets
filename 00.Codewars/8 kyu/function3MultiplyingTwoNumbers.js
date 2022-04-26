function multiply(num1, num2) {
  return num1 * num2;
}

multiply(2, 3); // 6

// Alternative solution:
function multiply(a, b) {
  if (typeof a == "number" && typeof b == "number") return a * b;
}
