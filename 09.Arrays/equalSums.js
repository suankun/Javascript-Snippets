/*
 * Function that determine if there is an element
 * in the array of numbers such that the sum of
 * the elements ot its left is equal to the sum
 * of the elements on its right.
 * - if there is no elements to
 * the left/right, their sum is 0.
 * - print the index that satisfies the required
 * condition or "no" if there is no such index.
 */

function equalSums(arr) {
  // Creating boolean flag to check if we found out equal sums.
  let isFound = false;

  // Creating for loop to iterate throung the array.
  for (let i = 0; i < arr.length; i++) {
    // Creating two variables to temp store the value of the left and right sums.
    let leftSum = 0;
    let rightSum = 0;

    // Creating for loop from index - 1 decreasing to 0 to found out left sum.
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }

    // Creating for loop from index + 1 increasing to arr.length.
    //to found out right sum.
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    // Checking if left sum is equal to right sum, if equal print the index.
    if (leftSum == rightSum) {
      console.log(i);
      isFound = true;
    }
  }

  // Print "no" if we don't find the equal sum.
  if (!isFound) {
    console.log("no");
  }
}

// User input.
equalSums([1, 2, 3, 3]); // 2
equalSums([1, 2]); // no
equalSums([1]); // 0
equalSums([1, 2, 3]); // no
