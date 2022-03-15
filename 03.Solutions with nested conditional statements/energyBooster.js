function energyBooster(input) {
  const fruit = input[0];
  const size = input[1];
  const numberOfSets = Number(input[2]);
  let totalPrice = 0;
  switch (fruit) {
    case "Watermelon":
      if (size === "small") {
        totalPrice = 2 * numberOfSets * 56;
      } else if (size === "big") {
        totalPrice = 5 * numberOfSets * 28.7;
      }
      break;
    case "Mango":
      if (size === "small") {
        totalPrice = 2 * numberOfSets * 36.66;
      } else if (size === "big") {
        totalPrice = 5 * numberOfSets * 19.6;
      }
      break;
    case "Pineapple":
      if (size === "small") {
        totalPrice = 2 * numberOfSets * 42.1;
      } else if (size === "big") {
        totalPrice = 5 * numberOfSets * 24.8;
      }
      break;
    case "Raspberry":
      if (size === "small") {
        totalPrice = 2 * numberOfSets * 20;
      } else if (size === "big") {
        totalPrice = 5 * numberOfSets * 15.2;
      }
      break;
  }

  if (totalPrice >= 400 && totalPrice <= 1000) {
    totalPrice -= totalPrice * 0.15;
  } else if (totalPrice > 1000) {
    totalPrice -= totalPrice * 0.5;
  }
  console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);
