function sumOfTwoNumbers(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  const num3 = Number(input[2]);
  let isFound = false;
  let counter = 0;
  for (let i = num1; i <= num2; i++) {
    for (let j = num1; j <= num2; j++) {
      counter++;
      let res = i + j;
      if (res === num3) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${num3})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${num3}`);
  }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
