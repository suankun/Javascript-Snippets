/*
 * Function which prints common elements in
 * two string arrays. Print all matches on
 * separate lines
 */
function commonElements(arr1, arr2) {
  // Loop through the arr1 in order to check for common elements
  for (let i = 0; i < arr1.length; i++) {
    // Checking if the elements is includes in the both arrays (arr1 and arr2)
    if (arr2.includes(arr1[i])) {
      // if element is duplicated print in console the element on separate lines
      console.log(arr1[i]);
    }
  }
}

commonElements(
  ["Hey", "Hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "Hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
