function basketballTournament(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalGamesCount = 0;
  let win = 0;
  let lost = 0;
  while (command !== "End of tournaments") {
    let tournamentsCount = Number(input[index]);
    index++;
    let gameCount = 0;
    for (let i = 0; i < tournamentsCount; i++) {
      let firstTeamPoints = Number(input[index]);
      index++;
      let secondTeamPoints = Number(input[index]);
      index++;
      gameCount++;
      totalGamesCount++;
      if (firstTeamPoints > secondTeamPoints) {
        win++;
        console.log(
          `Game ${gameCount} of tournament ${command}: win with ${
            firstTeamPoints - secondTeamPoints
          } points.`
        );
      } else if (secondTeamPoints > firstTeamPoints) {
        lost++;
        console.log(
          `Game ${gameCount} of tournament ${command}: lost with ${
            secondTeamPoints - firstTeamPoints
          } points.`
        );
      }
    }
    command = input[index];
    index++;
  }
  console.log(`${((win / totalGamesCount) * 100).toFixed(2)}% matches win`);
  console.log(`${((lost / totalGamesCount) * 100).toFixed(2)}% matches lost`);
}

basketballTournament([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
// basketballTournament([
//   "Ballers",
//   "3",
//   "87",
//   "63",
//   "56",
//   "65",
//   "75",
//   "64",
//   "Sharks",
//   "4",
//   "64",
//   "76",
//   "65",
//   "86",
//   "68",
//   "99",
//   "45",
//   "78",
//   "End of tournaments",
// ]);
