function solve(input) {
  const priceFlourPerKg = Number(input[0]);
  const flourQty = Number(input[1]);
  const shugarQty = Number(input[2]);
  const eggsPcs = Number(input[3]);
  const yeastPcs = Number(input[4]);

  const priceShugarPerKg = priceFlourPerKg * 0.75;
  const priceEggs = priceFlourPerKg * 1.1;
  const priceYeast = priceShugarPerKg * 0.2;

  const totalFlour = priceFlourPerKg * flourQty;
  const totalShugar = priceShugarPerKg * shugarQty;
  const totalEggs = priceEggs * eggsPcs;
  const totalYeast = priceYeast * yeastPcs;

  const totalAmaout = totalFlour + totalShugar + totalEggs + totalYeast;

  console.log(totalAmaout);
}

solve(["50", "10", "3.5", "6", "1"]);
