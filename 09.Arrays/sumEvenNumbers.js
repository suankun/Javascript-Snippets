/*
 * Function that recieve strings of numbers. We have to
 * parse them to numbers and sum only the even numbers.
 */

function sumEvenNumbers(numbers) {
  // Creating result variable.
  let output = 0;

  // Iterate through the array to calculate the even numbers.
  for (let num of numbers) {
    if (num % 2 == 0) {
      // Parse the string to number.
      output += Number(num);
    }
  }

  // Printing the result.
  console.log(output);
}

// User input.
sumEvenNumbers([1, 2, 3, 4, 5, 6]); // 12
sumEvenNumbers([3, 5, 7, 9]); // 0
sumEvenNumbers([2, 4, 6, 8, 10]); // 30
