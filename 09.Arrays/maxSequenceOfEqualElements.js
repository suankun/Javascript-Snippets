function maxSequenceOfEqualElements(array) {
  let longestSequance = [];
  for (let i = 0; i < array.length; i++) {
    let tempArray = [];
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        tempArray.push(array[j]);
      } else {
        break;
      }
      if (tempArray.length > longestSequance.length) {
        longestSequance = tempArray;
      }
    }
  }
  console.log(longestSequance.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // 2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]); // 1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4]); // 4 4 4 4
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]); // 1 1
