function series(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  const seriesCount = Number(input[index]);
  index++;
  let totalSeriesCost = 0;
  for (let i = 0; i < seriesCount; i++) {
    const tempSeriesName = input[index];
    index++;
    const tempSeriesCost = Number(input[index]);
    index++;
    switch (tempSeriesName) {
      case "Thrones":
        totalSeriesCost += tempSeriesCost * 0.5;
        break;
      case "Lucifer":
        totalSeriesCost += tempSeriesCost * 0.6;
        break;
      case "Protector":
        totalSeriesCost += tempSeriesCost * 0.7;
        break;
      case "TotalDrama":
        totalSeriesCost += tempSeriesCost * 0.8;
        break;
      case "Area":
        totalSeriesCost += tempSeriesCost * 0.9;
        break;
      default:
        totalSeriesCost += tempSeriesCost;
        break;
    }
  }
  const diff = Math.abs(budget - totalSeriesCost);
  if (budget >= totalSeriesCost) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
You bought all the series and left with 0.50 lv.
series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);