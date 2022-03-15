function club(input) {
  let index = 0;
  const neededProfit = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let income = 0;
  while (command !== "Party!") {
    let tempDrink = command;
    let tempCountsOfDrinks = Number(input[index]);
    index++;
    let tempPrice = 0;
    tempPrice = tempDrink.length * tempCountsOfDrinks;
    if (tempPrice % 2 !== 0) {
      tempPrice -= tempPrice * 0.25;
    }
    income += tempPrice;
    if (income >= neededProfit) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${income.toFixed(2)} leva.`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Party!") {
    console.log(`We need ${(neededProfit - income).toFixed(2)} leva more.`);
    console.log(`Club income - ${income.toFixed(2)} leva.`);
  }
}

club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
