/*
 * Function that rotates an array. It rotates exactly
 * the number ot times of the last element.
 */

function rotateArray(array) {
  // Determin the rotates number.
  const rotation = Number(array[array.length - 1]);

  // Taking out the last element.
  array.pop();

  // Creating the for loop to rotate the array.
  for (let i = 0; i < rotation; i++) {
    // take our the last element and put it in front.
    let lastElement = array.pop();
    array.unshift(lastElement);
  }

  // Print the result.
  console.log(array.join(" "));
}

// User input.
rotateArray(["1", "2", "3", "4", "2"]); // 3 4 1 2
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]); //Orange, Coconut, Apple, Banana
