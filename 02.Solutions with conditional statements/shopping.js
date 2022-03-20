function solve(input) {
  const budget = Number(input[0]);
  const countVideoCards = Number(input[1]);
  const countProcessors = Number(input[2]);
  const countRam = Number(input[3]);

  const priceVideoCards = 250;
  const totalVideoCards = countVideoCards * priceVideoCards;

  const priceProcessors = totalVideoCards * 0.35;
  const totalProcessors = countProcessors * priceProcessors;

  const priceRam = totalVideoCards * 0.1;
  const totalRam = countRam * priceRam;

  let totalCost = totalVideoCards + totalProcessors + totalRam;

  if (countVideoCards > countProcessors) {
    totalCost *= 0.85;
  }

  const diff = Math.abs(budget - totalCost);

  if (budget >= totalCost) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}

solve(["900", "2", "1", "3"]);
solve(["920.45", "3", "1", "1"]);
