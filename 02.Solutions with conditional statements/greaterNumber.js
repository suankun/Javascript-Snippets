function solve(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

solve(["5", "3"]);
solve(["-5", "7"]);
