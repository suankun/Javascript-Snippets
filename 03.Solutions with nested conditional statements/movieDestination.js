function movieDestination(input) {
  const budget = Number(input[0]);
  const destination = input[1];
  const season = input[2];
  const days = Number(input[3]);
  let totalCost = 0;
  switch (destination) {
    case "Dubai":
      if (season === "Winter") {
        totalCost = 45000;
      } else if (season === "Summer") {
        totalCost = 40000;
      }
      break;
    case "Sofia":
      if (season === "Winter") {
        totalCost = 17000;
      } else if (season === "Summer") {
        totalCost = 12500;
      }
      break;
    case "London":
      if (season === "Winter") {
        totalCost = 24000;
      } else if (season === "Summer") {
        totalCost = 20250;
      }
      break;
  }
  totalCost *= days;
  if (destination === "Dubai") {
    totalCost -= totalCost * 0.3;
  } else if (destination === "Sofia") {
    totalCost += totalCost * 0.25;
  }
  const diff = Math.abs(budget - totalCost);
  if (budget >= totalCost) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

movieDestination(["400000", "Sofia", "Winter", "20"]);
movieDestination(["1000000", "Dubai", "Summer", "5"]);
movieDestination(["200000", "London", "Summer", "7"]);
