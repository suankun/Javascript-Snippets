function equalSums(arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum == rightSum) {
      console.log(i);
      isFound = true;
    }
  }
  if (!isFound) {
    console.log("no");
  }
}

equalSums([1, 2, 3, 3]); // 2
equalSums([1, 2]); // no
equalSums([1]); // 0
equalSums([1, 2, 3]); // no
