function solve(input) {
  const cakePcs = Number(input[0]);
  const eggsPcs = Number(input[1]);
  const biscuitsKg = Number(input[2]);

  const cakePrice = 3.2;
  const eggsPrice = 4.35;
  const biscuitsPrice = 5.4;
  const paintForEggs = 0.15;

  const cakes = cakePcs * cakePrice;
  const eggs = eggsPcs * eggsPrice;
  const biscuits = biscuitsKg * biscuitsPrice;
  const paintForEggsPrice = eggsPcs * 12 * paintForEggs;

  const res = cakes + eggs + biscuits + paintForEggsPrice;

  console.log(res.toFixed(2));
}

solve(["3", "2", "3"]);
solve(["4", "4", "3"]);
