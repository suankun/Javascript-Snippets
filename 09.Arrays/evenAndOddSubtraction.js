/*
 * Function that calculate the difference
 * between the sum of even and the sum of
 * odd numbers in an array.
 */

function evenAndOddSubtraction(array) {
  // Creating variables to store the sums of even and odd numbers
  let evenSum = 0;
  let oddSum = 0;

  // Loop through the array to parse elements to numbers
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }

  // Loop through the array to find the sums of even and odd numbers
  for (let num of array) {
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  // Find the difference and printing the result.
  console.log(evenSum - oddSum);
}

// User input.
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]); // 3
evenAndOddSubtraction([3, 5, 7, 9]); // -24
evenAndOddSubtraction([2, 4, 6, 8, 10]); // 30
