/*
 * Function that extracts only those numbers that forms
 * a non-decreasing subset. Any number that is less
 * than the current biggest one is ignored.
 */

function nonDecreasingSubset(array) {
  // Creating result array.
  let result = [];

  // Keeping the current biggest number, starting from the first element
  // in the array.
  let currBiggestNum = array[0];

  // Loop through the array.
  for (let i = 0; i < array.length; i++) {
    // Logic to check if the number is max and not decreasing.
    if (array[i] >= currBiggestNum) {
      result.push(array[i]);
      currBiggestNum = array[i];
    }
  }

  // Printing the result.
  console.log(result.join(" "));
}

// User input.
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]); // 1 3 8 10 12 24
nonDecreasingSubset([1, 2, 3, 4]); // 1 2 3 4
nonDecreasingSubset([20, 3, 2, 15, 6, 1]); // 20
