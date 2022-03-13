function password(input) {
  let index = 0;
  const username = input[index];
  index++;
  const pass = input[index];
  index++;
  let tempPass = input[index];
  index++;
  while (pass !== tempPass) {
    tempPass = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
