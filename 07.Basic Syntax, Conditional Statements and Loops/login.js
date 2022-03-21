function login(input) {
  let index = 0;
  let username = input[index];
  index++;
  let correctPass = username.split("").reverse().join("");
  let password = input[index];
  index++;
  let incorrectTriesCounter = 0;
  while (password !== correctPass) {
    incorrectTriesCounter++;
    if (incorrectTriesCounter > 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    console.log(`Incorrect password. Try again.`);
    password = input[index];
    index++;
  }
  if (incorrectTriesCounter <= 3) {
    console.log(`User ${username} logged in.`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
