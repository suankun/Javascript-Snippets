function minNumber(input) {
  let index = 0;
  let command = input[index];
  index++;
  let minNum = Number.MAX_SAFE_INTEGER;
  while (command !== "Stop") {
    let num = Number(command);
    if (minNum > num) {
      minNum = num;
    }
    command = input[index];
    index++;
  }
  console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]); // 70
minNumber(["-10", "20", "-30", "Stop"]); // -30
minNumber(["45", "-20", "7", "99", "Stop"]); // -20
minNumber(["999", "Stop"]); // 999
minNumber(["-1", "-2", "Stop"]); // -2
