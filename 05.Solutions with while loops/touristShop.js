function touristShop(input) {
  const budget = Number(input[0]);
  let productsCounter = 0;
  let totalCost = budget;
  let index = 1;
  let command = input[index];
  index++;
  while (command !== "Stop") {
    let productPrice = Number(input[index]);
    index++;
    productsCounter++;
    if (productsCounter % 3 === 0) {
      totalCost -= productPrice * 0.5;
    } else {
      totalCost -= productPrice;
    }
    if (totalCost < 0) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${Math.abs(totalCost).toFixed(2)} leva!`);
      break;
    }

    command = input[index];
    index++;
  }
  if (command === "Stop") {
    console.log(
      `You bought ${productsCounter} products for ${Math.abs(
        totalCost - budget
      ).toFixed(2)} leva.`
    );
  }
}

touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
