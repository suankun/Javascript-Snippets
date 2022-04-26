function positiveSum(arr) {
  let ids = arr.filter(function (x) {
    return x > -1;
  });
  return ids.reduce((a, b) => a + b, 0);
}

// Alternative solution:
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}
