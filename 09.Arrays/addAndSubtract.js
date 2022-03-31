/*
 * Function which changes the value of odd
 * and even numbers in an array of numbers
 * - if the number is even - add to it's value its index position
 * - if the number is odd - subtract to its value its index position
 */

function addAndSubtract(array) {
  // Taking the sum of the original array
  let sumOriginalArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumOriginalArray += array[i];
  }

  // Creating for loop to iterate through the original array
  let resArray = [];
  for (let i = 0; i < array.length; i++) {
    // Searching for odd and even numbers
    if (array[i] % 2 == 0) {
      resArray.push(array[i] + i);
    } else {
      resArray.push(array[i] - i);
    }
  }

  // Taking the sum of the modified array
  let sumNewArray = 0;
  for (let i = 0; i < resArray.length; i++) {
    sumNewArray += resArray[i];
  }

  // Printing the modified array and the sums of original and modified arrays
  console.log(resArray);
  console.log(sumOriginalArray);
  console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);

function addAndSubtract(arr) {
  const myArr = arr;
  let sumOriginalArray = 0;
  let sumNewArray = 0;
  for (let index = 0; index < myArr.length; index++) {
    sumOriginalArray += myArr[index];
    if (myArr[index] % 2 == 0) {
      myArr[index] += index;
    } else {
      myArr[index] -= index;
    }
    sumNewArray += myArr[index];
  }
  console.log(myArr);
  console.log(sumOriginalArray);
  console.log(sumNewArray);
}
