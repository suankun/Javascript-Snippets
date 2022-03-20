function solve(input) {
  const budget = Number(input[0]);
  const actors = Number(input[1]);
  let suitPrice = Number(input[2]);

  const decor = budget * 0.1;

  if (actors > 150) {
    suitPrice *= 0.9;
  }

  const suitCost = actors * suitPrice;
  const totalCost = decor + suitCost;

  const diff = Math.abs(budget - totalCost);

  if (totalCost >= budget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}

solve(["20000", "120", "55.5"]);
solve(["15437.62", "186", "57.99"]);
solve(["9587.88", "222", "55.68"]);

solve(["1377", "389", "3"]);
