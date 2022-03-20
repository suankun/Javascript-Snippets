function solve(input) {
  const guests = Number(input[0]);
  let cover = Number(input[1]);
  const budget = Number(input[2]);

  if (guests >= 10 && guests <= 15) {
    cover *= 0.85;
  } else if (guests > 15 && guests <= 20) {
    cover *= 0.8;
  } else if (guests > 20) {
    cover *= 0.75;
  }

  const cakePrice = budget * 0.1;
  const totalCost = guests * cover + cakePrice;

  const diff = Math.abs(budget - totalCost);

  if (budget >= totalCost) {
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
}

solve(["18", "30", "450"]);
solve(["8", "25", "340"]);
solve(["24", "35", "550"]);
