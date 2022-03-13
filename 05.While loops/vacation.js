function vacation(input) {
  index = 0;
  let excursionPrice = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let daysSpend = 0;
  let dayCounter = 0;

  while (money < excursionPrice) {
    dayCounter++;
    let action = input[index];
    index++;
    let amountOfMoney = Number(input[index]);

    switch (action) {
      case "spend":
        money -= amountOfMoney;
        if (money < 0) {
          money = 0;
        }
        daysSpend++;
        break;

      case "save":
        money += amountOfMoney;
        daysSpend = 0;
        break;
    }
    if (daysSpend >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${dayCounter}`);
      break;
    }
    index++;
  }
  if (money >= excursionPrice) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
