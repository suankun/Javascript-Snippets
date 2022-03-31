/*
 * Function which receives an array
 * and the number of rotations.
 * - depending of the number of rotation
 * the first element goes to the end.
 */

function arrayRotation(array, rotation) {
  // Creating a loop untill the number of rotation.
  for (let i = 0; i < rotation; i++) {
    // Removing and saving the value of the current iteration.
    let tempNum = array.shift();

    // Adding value of the current element to the end of the array.
    array.push(tempNum);
  }

  // Printing the array.
  console.log(array.join(" "));
}

// User input.
arrayRotation([51, 47, 32, 61, 21], 2); // 32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4); // 32 21 61 1
arrayRotation([2, 4, 15, 31], 5); // 4 15 31 2
