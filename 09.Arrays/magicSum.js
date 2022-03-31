/*
 * Function which prints all unique pairs
 * in an array of integers whose sum is
 * equal to a given number.
 */

function magicSum(arr, mgcSum) {
  // Creting two for loop to itterate through all combination of numbers
  for (let i = 0; i < arr.length - 1; i++) {
    // Creating a variable to store the current element
    let currentElement = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      // Creating variable to store the element after the current element
      let nextElement = arr[j];

      // Sum of current and next element
      let sumOfCurrAndNextElement = currentElement + nextElement;

      // Comparing all combination equal to the magic sum (mgcSum)
      if (sumOfCurrAndNextElement == mgcSum) {
        // Printing the result
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

// User input.
magicSum([1, 7, 6, 2, 19, 23], 8); // 1 7, 6 2
magicSum([14, 20, 60, 13, 7, 19, 8], 27); // 14 13, 20 7, 19 8
magicSum([1, 2, 3, 4, 5, 6], 6); // 1 5, 2 4
