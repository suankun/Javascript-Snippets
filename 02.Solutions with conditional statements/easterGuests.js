function solve(input) {
  const guests = Number(input[0]);
  const budget = Number(input[1]);

  const cakePrice = 4;
  const eggPrice = 0.45;

  const cakes = Math.ceil(guests / 3);
  const eggs = guests * 2;

  const totalCakesPrice = cakes * cakePrice;
  const totalEggsPrice = eggs * eggPrice;
  const totalCost = totalCakesPrice + totalEggsPrice;

  const diff = Math.abs(budget - totalCost);

  if (budget >= totalCost) {
    console.log(`Lyubo bought ${cakes} Easter bread and ${eggs} eggs.`);
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

solve(["10", "35"]);
solve(["9", "12"]);
