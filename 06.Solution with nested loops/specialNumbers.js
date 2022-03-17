function specialNumbers(input) {
  let n = Number(input[0]);
  let output = "";
  for (let i = 1111; i <= 9999; i++) {
    let numberAsString = String(i);
    for (let j = 0; j < numberAsString.length; j++) {
      let currentNum = Number(numberAsString[j]);
      if (n % currentNum !== 0) {
        break;
      }
      if (j === 3 && n % currentNum === 0) {
        output += i + " ";
      }
    }
  }
  console.log(output);
}

specialNumbers(["3"]);
