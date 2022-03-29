function maxNumber(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tempNum = newArray.shift();
    let tempMax = Math.max(...newArray);
    if (tempNum > tempMax) {
      maxArr.push(arr[i]);
    }
  }
  console.log(maxArr.join(" "));
}

maxNumber([1, 4, 3, 2]); // 4 3 2
maxNumber([14, 24, 3, 19, 15, 17]); // 24 19 17
maxNumber([41, 41, 34, 20]); // 41 34 20
