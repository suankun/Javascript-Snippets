function paintingEggs(input) {
  const eggSize = input[0];
  const eggColor = input[1];
  const eggBatches = Number(input[2]);
  let totalCost = 0;
  switch (eggSize) {
    case "Large":
      switch (eggColor) {
        case "Red":
          totalCost = 16 * eggBatches;
          break;
        case "Green":
          totalCost = 12 * eggBatches;
          break;
        case "Yellow":
          totalCost = 9 * eggBatches;
          break;
      }
      break;
    case "Medium":
      switch (eggColor) {
        case "Red":
          totalCost = 13 * eggBatches;
          break;
        case "Green":
          totalCost = 9 * eggBatches;
          break;
        case "Yellow":
          totalCost = 7 * eggBatches;
          break;
      }
      break;
    case "Small":
      switch (eggColor) {
        case "Red":
          totalCost = 9 * eggBatches;
          break;
        case "Green":
          totalCost = 8 * eggBatches;
          break;
        case "Yellow":
          totalCost = 5 * eggBatches;
          break;
      }
      break;
  }
  totalCost -= totalCost * 0.35;
  console.log(`${totalCost.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"]);
