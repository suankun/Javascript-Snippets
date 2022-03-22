function sumDigits(num) {
  let number = String(num);
  sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

// function sumDigits(num) {
//   let sum = 0;
//   let numberAsString = num.toString();
//   for (const char of numberAsString) {
//     sum += Number(char);
//   }
//   console.log(sum);
// }
