/*
 * Function that receives a number "n" and
 * an array of elements. Have to create a new
 * array with "n" numbers from the original
 * array, reverse it and print it on a single
 * line, space - separated.
 */

function reverseAnArrayOfNumbers(n, arr) {
  // Creating the result array.
  let result = [];

  // Loop through original array decresing,
  // to take the "n" numbers in reverse order.
  for (let i = n - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  // Printing the result:
  console.log(result.join(" "));
}

// User input.
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
