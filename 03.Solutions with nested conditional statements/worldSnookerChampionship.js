function worldSnookerChampionship(input) {
  const championshipStage = input[0];
  const ticketType = input[1];
  const ticketsBought = Number(input[2]);
  const shotWithTheTrophy = input[3];
  let totalCost = 0;
  switch (championshipStage) {
    case "Quarter final":
      switch (ticketType) {
        case "Standard":
          totalCost = 55.5 * ticketsBought;
          break;
        case "Premium":
          totalCost = 105.2 * ticketsBought;
          break;
        case "VIP":
          totalCost = 118.9 * ticketsBought;
          break;
      }
      break;
    case "Semi final":
      switch (ticketType) {
        case "Standard":
          totalCost = 75.88 * ticketsBought;
          break;
        case "Premium":
          totalCost = 125.22 * ticketsBought;
          break;
        case "VIP":
          totalCost = 300.4 * ticketsBought;
          break;
      }
      break;
    case "Final":
      switch (ticketType) {
        case "Standard":
          totalCost = 110.1 * ticketsBought;
          break;
        case "Premium":
          totalCost = 160.66 * ticketsBought;
          break;
        case "VIP":
          totalCost = 400 * ticketsBought;
          break;
      }
      break;
  }

  if (totalCost > 4000) {
    totalCost -= totalCost * 0.25;
  } else if (totalCost > 2500) {
    totalCost -= totalCost * 0.1;
    if (shotWithTheTrophy === "Y") {
      totalCost += ticketsBought * 40;
    }
  } else if (shotWithTheTrophy === "Y") {
    totalCost += ticketsBought * 40;
  }
  console.log(totalCost.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
