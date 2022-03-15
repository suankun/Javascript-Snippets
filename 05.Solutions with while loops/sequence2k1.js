function sequence2k1(input) {
  const num = Number(input[0]);
  let sum = 1;
  while (num >= sum) {
    console.log(sum);
    sum = sum * 2 + 1;
  }
}

sequence2k1(["3"]);
sequence2k1(["8"]);
sequence2k1(["17"]);
