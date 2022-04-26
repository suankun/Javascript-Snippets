function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3.sort(function (a, b) {
    return a - b;
  });
  const result = arr3.filter((item, index) => arr3.indexOf(item) == index);
  return result;
}

mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]); // [1,2,3,4,5,6,7,8]
mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]); // [1,2,3,4,5,6,7,8,9,10]
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]); // [1,2,3,4,5,7,9,10,11,12]

// Alternative solution:
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
