function movieStars(input) {
  let totalBudget = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  while (command !== "ACTION") {
    if (command.length > 15) {
      totalBudget -= totalBudget * 0.2;
      command = input[index];
      index++;
      continue;
    }
    const payment = Number(input[index]);
    index++;
    if (command.length <= 15) {
      totalBudget -= payment;
    }
    if (totalBudget < 0) {
      console.log(
        `We need ${Math.abs(totalBudget).toFixed(2)} leva for our actors.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "ACTION") {
    console.log(`We are left with ${totalBudget.toFixed(2)} leva.`);
  }
}

movieStars([
  "90000",
  "Christian Bale",
  "70000.50",
  "Leonard DiCaprio",
  "Kevin Spacey",
  "24000.99",
]);
movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);
