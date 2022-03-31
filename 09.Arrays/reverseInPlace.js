/*
 * Function that receive an array of strings.
 * We have to reverse the array without creating
 * new array.
 * Print the resulting elements on a single line,
 * space - separated.
 */

function reverseInPlace(arr) {
  // Creating a loop to iterate through the half of the array.
  for (let i = 0; i < arr.length / 2; i++) {
    // Swap elements from the first half with the elements of the second half.
    let k = arr.length - 1 - i;
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }

  // Printng the result.
  console.log(arr.join(" "));
}

// User input.
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["33", "123", "0", "dd"]);
