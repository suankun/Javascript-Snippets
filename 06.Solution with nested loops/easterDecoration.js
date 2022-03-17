function easterDecoration(input) {
  let index = 0;
  const clientsNumber = Number(input[index]);
  index++;
  const easterEggs = 1.5;
  const easterWreath = 3.8;
  const easterBunny = 7;
  let avrCostPerClient = 0;
  for (let i = 0; i < clientsNumber; i++) {
    let purchasedItems = 0;
    let totalCost = 0;
    let command = input[index];
    index++;
    while (command !== "Finish") {
      purchasedItems++;
      switch (command) {
        case "basket":
          totalCost += easterEggs;
          break;
        case "wreath":
          totalCost += easterWreath;
          break;
        case "chocolate bunny":
          totalCost += easterBunny;
          break;
      }
      command = input[index];
      index++;
    }
    if (purchasedItems % 2 === 0) {
      totalCost -= totalCost * 0.2;
      avrCostPerClient += totalCost;
      console.log(
        `You purchased ${purchasedItems} items for ${totalCost.toFixed(
          2
        )} leva.`
      );
    } else {
      avrCostPerClient += totalCost;
      console.log(
        `You purchased ${purchasedItems} items for ${totalCost.toFixed(
          2
        )} leva.`
      );
    }
  }
  console.log(
    `Average bill per client is: ${(avrCostPerClient / clientsNumber).toFixed(
      2
    )} leva.`
  );
}

easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
