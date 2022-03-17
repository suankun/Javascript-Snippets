function easterCompetition(input) {
  let index = 0;
  const cakeNumbers = Number(input[index]);
  index++;
  let maxPoints = 0;
  let winnersName = "";
  for (let i = 0; i < cakeNumbers; i++) {
    let chefName = input[index];
    index++;
    let command = input[index];
    index++;
    let points = 0;
    while (command !== "Stop") {
      let tempPoints = Number(command);
      points += tempPoints;
      command = input[index];
      index++;
    }
    console.log(`${chefName} has ${points} points.`);
    if (maxPoints < points) {
      maxPoints = points;
      winnersName = chefName;
      console.log(`${chefName} is the new number 1!`);
    }
  }
  console.log(`${winnersName} won competition with ${maxPoints} points!`);
}

easterCompetition([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
// easterCompetition([
//   "2",
//   "Chef Angelov",
//   "9",
//   "9",
//   "9",
//   "Stop",
//   "Chef Rowe",
//   "10",
//   "10",
//   "10",
//   "10",
//   "Stop",
// ]);
