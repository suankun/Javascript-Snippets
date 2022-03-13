function vowelsSum(input) {
  const word = input[0];
  let res = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      res += 1;
    } else if (word[i] === "e") {
      res += 2;
    } else if (word[i] === "i") {
      res += 3;
    } else if (word[i] === "o") {
      res += 4;
    } else if (word[i] === "u") {
      res += 5;
    }
  }
  console.log(res);
}

vowelsSum(["hello"]);
vowelsSum(["bamboo"]);
