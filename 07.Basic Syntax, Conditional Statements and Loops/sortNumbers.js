function sortNumbers(num1, num2, num3) {
  let arr = [num1, num2, num3];
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

sortNumbers(2, 1, 3);
