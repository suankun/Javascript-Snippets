/*
 * Function that finds all the top integers in
 * an array. A top integer is an integer, which
 * is bigger than all the elements to its right.
 * Print all the top integers on the console,
 * separated with a single space.
 */

function maxNumber(arr) {
  // Copy the original array.
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }

  // Creating new array in which we will save the top integers.
  let maxArr = [];

  // Creating for loop to iterate through the array.
  for (let i = 0; i < arr.length; i++) {
    // Taking the number of the current index and deleted from the array.
    let tempNum = newArray.shift();

    // Taking the max number of the current array.
    let tempMax = Math.max(...newArray);

    // Checking if the number is max integer from the numbers of right.
    // - if it is max number, we push it in the new array.
    if (tempNum > tempMax) {
      maxArr.push(arr[i]);
    }
  }

  // Return the result separated with space.
  console.log(maxArr.join(" "));
}

// User input.
maxNumber([1, 4, 3, 2]); // 4 3 2
maxNumber([14, 24, 3, 19, 15, 17]); // 24 19 17
maxNumber([41, 41, 34, 20]); // 41 34 20
