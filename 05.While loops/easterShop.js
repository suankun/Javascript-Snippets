function easterShop(input) {
  let index = 0;
  let initialEggsQty = Number(input[index]);
  index++;
  let soldEggsCounter = 0;
  let command = input[index];
  index++;
  while (command !== "Close") {
    let tempQty = Number(input[index]);
    index++;

    if (command === "Buy") {
      if (tempQty > initialEggsQty) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${initialEggsQty}.`);
        break;
      }
      initialEggsQty -= tempQty;
      soldEggsCounter += tempQty;
    } else if (command === "Fill") {
      initialEggsQty += tempQty;
    }

    command = input[index];
    index++;
  }
  if (command === "Close") {
    console.log(`Store is closed!`);
    console.log(`${soldEggsCounter} eggs sold.`);
  }
}

easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
