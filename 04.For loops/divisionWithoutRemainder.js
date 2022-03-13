function divisionWithoutRemainder(input) {
  let index = 0;
  const countOfNumbers = Number(input[index]);
  index++;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 0; i < countOfNumbers; i++) {
    let tempNum = Number(input[index]);
    index++;

    if (tempNum % 2 === 0) {
      p1++;
    }
    if (tempNum % 3 === 0) {
      p2++;
    }
    if (tempNum % 4 === 0) {
      p3++;
    }
  }
  console.log(`${((p1 / countOfNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p2 / countOfNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p3 / countOfNumbers) * 100).toFixed(2)}%`);
}

divisionWithoutRemainder(["3", "3", "6", "9"]);
divisionWithoutRemainder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
