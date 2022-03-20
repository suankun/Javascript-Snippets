function solve(input) {
  const budget = Number(input[0]);
  const nights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  const addCostsPer = Number(input[3]);

  if (nights > 7) {
    pricePerNight *= 0.95;
  }

  const nightsCost = nights * pricePerNight;
  const addCosts = budget * (addCostsPer / 100);
  const totalCost = nightsCost + addCosts;

  const diff = Math.abs(budget - totalCost);

  if (budget >= totalCost) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}

solve(["800.50", "8", "100", "2"]);
solve(["500", "7", "66", "15"]);
