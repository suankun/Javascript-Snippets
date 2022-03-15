function numbers1NwithStep3(input) {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i = i + 3) {
    console.log(i);
  }
}

numbers1NwithStep3(["4"]);
