function mobileOperator(input) {
  const termOfContract = input[0];
  const typeOfContract = input[1];
  const addInternet = input[2];
  const monthsForPaying = Number(input[3]);
  let totalCost = 0;
  if (termOfContract === "one") {
    switch (typeOfContract) {
      case "Small":
        totalCost = 9.98;
        break;
      case "Middle":
        totalCost = 18.99;
        break;
      case "Large":
        totalCost = 25.98;
        break;
      case "ExtraLarge":
        totalCost = 35.99;
        break;
    }
  } else if (termOfContract === "two") {
    switch (typeOfContract) {
      case "Small":
        totalCost = 8.58;
        break;
      case "Middle":
        totalCost = 17.09;
        break;
      case "Large":
        totalCost = 23.59;
        break;
      case "ExtraLarge":
        totalCost = 31.79;
        break;
    }
  }
  if (addInternet === "yes" && totalCost <= 10) {
    totalCost += 5.5;
  } else if (addInternet === "yes" && totalCost <= 30) {
    totalCost += 4.35;
  } else if (addInternet === "yes" && totalCost > 30) {
    totalCost += 3.85;
  }
  totalCost *= monthsForPaying;

  if (termOfContract === "two") {
    totalCost -= totalCost * 0.0375;
  }
  console.log(`${totalCost.toFixed(2)} lv.`);
}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"]);
