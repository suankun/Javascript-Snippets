/*
 * Function that add/remove numbers to/from an array.
 * You will receive command, which can eather be "add"
 *  or "remove".
 * "add" - add the current number to the array
 * "remove" - remove the last entered number, currently
 * existent in the array.
 * Print elements in a row separated with a space.
 */

function addAndRemove(array) {
  // Create result array.
  let result = [];

  // Create loop to receive commands add or remove.
  for (let i = 0; i < array.length; i++) {
    // Logic to add or remove numbers to result array.
    switch (array[i]) {
      case "add":
        result.push(i + 1);
        break;
      case "remove":
        result.pop(i + 1);
        break;
    }
  }

  // Print the result.
  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

// User input.
addAndRemove(["add", "add", "add", "add"]); // 1 2 3 4
addAndRemove(["add", "add", "remove", "add", "add"]); // 1 4 5
addAndRemove(["remove", "remove", "remove"]); // Empty
