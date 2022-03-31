/*
 * Function which receives two string arrays
 * and merges them into a third array
 * - if the index of the element is even,
 * add into the third array the
 * sum of both elements at that index
 * - if the index of the element is odd,
 * add the concatenation of both elements at
 * that index
 */

function mergeArrays(arr1, arr2) {
  // Creating the array in which will push the result
  let resArray = [];

  // Creating loop to iterate through arr1
  for (let i = 0; i < arr1.length; i++) {
    // Checking if the index is odd or even
    // - if the index is even, add into the third array the
    // sum of both elements at that index
    // - if the index is odd, add the concatenation of both
    // elements at that index
    if (i % 2 == 0) {
      resArray.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      resArray.push(arr1[i] + arr2[i]);
    }
  }

  // Printing the result separated with " - "
  console.log(resArray.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
