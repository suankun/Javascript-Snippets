function solve(input) {
  const trip = Number(input[0]);
  const countPuzzles = Number(input[1]);
  const countDolls = Number(input[2]);
  const countTeddies = Number(input[3]);
  const countMinions = Number(input[4]);
  const countTrucks = Number(input[5]);

  const pricePuzzle = 2.6;
  const priceDoll = 3;
  const priceTeddy = 4.1;
  const priceMinion = 8.2;
  const priceTruck = 2;

  let totalPrice =
    countPuzzles * pricePuzzle +
    countDolls * priceDoll +
    countTeddies * priceTeddy +
    countMinions * priceMinion +
    countTrucks * priceTruck;

  const totalToys =
    countPuzzles + countDolls + countTeddies + countMinions + countTrucks;

  if (totalToys >= 50) {
    totalPrice *= 0.75;
  }

  totalPrice *= 0.9;

  const diff = Math.abs(totalPrice - trip);

  if (totalPrice >= trip) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}

solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);
