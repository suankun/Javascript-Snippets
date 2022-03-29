function addAndSubtract(array) {
  let sumOriginalArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumOriginalArray += array[i];
  }
  let resArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      resArray.push(array[i] + i);
    } else {
      resArray.push(array[i] - i);
    }
  }
  let sumNewArray = 0;
  for (let i = 0; i < resArray.length; i++) {
    sumNewArray += resArray[i];
  }
  console.log(resArray);
  console.log(sumOriginalArray);
  console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
