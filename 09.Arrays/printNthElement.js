/*
 * Function that collects each element
 * of an array, on a given step.
 * The step is the last element from the array.
 * Print the result in a row, space - separated.
 */

function printNthElement(array) {
  // Defining the step and parsing it to number.
  let step = Number(array[array.length - 1]);

  // Removing the last element
  array.pop();

  // Creating result array to collect the numbers.
  let result = [];
  // loop through teh array to collect n-th elements.
  for (let i = 0; i < array.length; i = i + step) {
    // Push the elements to result array.
    result.push(array[i]);
  }

  // Print the result.
  console.log(result.join(" "));
}

// User input
printNthElement(["5", "20", "31", "4", "20", "2"]); // 5, 31, 20  -  (step is 2)
printNthElement(["dsa", "asd", "test", "test", "2"]); // dsa, test
printNthElement(["1", "2", "3", "4", "5", "6"]); // 1
