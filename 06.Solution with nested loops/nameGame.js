function nameGame(input) {
  let index = 0;
  let command = input[index];
  index++;
  let winnersName = "";
  let winnersPoints = 0;
  while (command !== "Stop") {
    let totalPoints = 0;
    for (let i = 0; i < command.length; i++) {
      const tempPoints = input[index];
      index++;
      if (command.charCodeAt(i) == tempPoints) {
        totalPoints += 10;
      } else {
        totalPoints += 2;
      }
    }
    if (winnersPoints <= totalPoints) {
      winnersName = command;
      winnersPoints = totalPoints;
    }
    command = input[index];
    index++;
  }
  console.log(`The winner is ${winnersName} with ${winnersPoints} points!`);
}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame([
  "Pesho",
  "124",
  "34",
  "111",
  "97",
  "99",
  "Gosho",
  "98",
  "124",
  "88",
  "76",
  "18",
  "Stop",
]);
