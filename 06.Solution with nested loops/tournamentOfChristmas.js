function tournamentOfChristmas(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  let earnedMoneyTotal = 0;
  let wholeDayWin = 0;
  let wholeDayLose = 0;
  for (let i = 0; i < days; i++) {
    let command = input[index];
    index++;
    let wins = 0;
    let loses = 0;
    let earnedMoneyPerDay = 0;

    while (command !== "Finish") {
      let tempRes = input[index];
      index++;
      switch (tempRes) {
        case "win":
          wins++;
          earnedMoneyPerDay += 20;
          break;
        case "lose":
          loses++;
          break;
      }
      command = input[index];
      index++;
    }
    if (wins > loses) {
      earnedMoneyPerDay += earnedMoneyPerDay * 0.1;
      wholeDayWin++;
    } else {
      wholeDayLose++;
    }
    earnedMoneyTotal += earnedMoneyPerDay;
  }
  if (wholeDayWin > wholeDayLose) {
    earnedMoneyTotal += earnedMoneyTotal * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${earnedMoneyTotal.toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${earnedMoneyTotal.toFixed(
        2
      )}`
    );
  }
}

tournamentOfChristmas([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
tournamentOfChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
