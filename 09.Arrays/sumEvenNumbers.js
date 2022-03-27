function sumEvenNumbers(numbers) {
  let output = 0;
  for (let num of numbers) {
    if (num % 2 == 0) {
      output += Number(num);
    }
  }
  console.log(output);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]); // 12
sumEvenNumbers([3, 5, 7, 9]); // 0
sumEvenNumbers([2, 4, 6, 8, 10]); // 30
