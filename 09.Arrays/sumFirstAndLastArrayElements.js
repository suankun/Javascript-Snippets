/*
 * Function that receive an array of numbers
 * and print the sum of the first and the
 * last element of that array.
 */

function sumFirstAndLastArrayElements(input) {
  // Taking the first and the last element.
  const firstElement = input[0];
  const secondElement = input[input.length - 1];

  // Printing the result.
  console.log(firstElement + secondElement);
}

// User input.
sumFirstAndLastArrayElements([20, 30, 40]);
