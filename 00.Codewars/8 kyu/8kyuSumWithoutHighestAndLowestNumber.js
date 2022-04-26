function sumArray(array) {
  if (array !== null && array !== undefined) {
    array.sort((a, b) => a - b);
    array.pop();
    array.shift();
    let sum = array.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    return sum;
  } else {
    return 0;
  }
}

// Alternative solution 1:
sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

// Alternative solution 2:
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
