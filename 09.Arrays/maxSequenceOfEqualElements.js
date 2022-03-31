/*
 * Function that finds the longest sequance of
 * equal numbers in an array of number.
 * - if more than one sequance exist, print
 * the leftmost one.
 */

function maxSequenceOfEqualElements(array) {
  // Creating an empty array to store the result.
  let longestSequance = [];

  // For loop throung array length.
  for (let i = 0; i < array.length; i++) {
    // Creating temp array to store the temp result.
    let tempArray = [];

    // For loop through the numbers on the right of current index.
    for (let j = i; j < array.length; j++) {
      // Checking if the elements are equal.
      // - if they are equal push in the temp array .
      // - else break the loop.
      if (array[i] == array[j]) {
        tempArray.push(array[j]);
      } else {
        break;
      }

      // Checking if the temp array numbers are more than final result array.
      // - if they are more rewrite result array.
      if (tempArray.length > longestSequance.length) {
        longestSequance = tempArray;
      }
    }
  }

  // Printing the result.
  console.log(longestSequance.join(" "));
}

// User input.
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // 2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]); // 1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4]); // 4 4 4 4
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]); // 1 1
