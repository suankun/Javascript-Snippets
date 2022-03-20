function solve(input) {
  const priceStrawberries = Number(input[0]);
  const qtyBananas = Number(input[1]);
  const qtyOranges = Number(input[2]);
  const qtyRaspberries = Number(input[3]);
  const qtyStrawberries = Number(input[4]);

  const priceRaspberries = priceStrawberries / 2;
  const priceOranges = priceRaspberries * 0.6;
  const priceBananas = priceRaspberries * 0.2;

  const priceTotal =
    priceStrawberries * qtyStrawberries +
    priceRaspberries * qtyRaspberries +
    priceOranges * qtyOranges +
    priceBananas * qtyBananas;

  console.log(priceTotal.toFixed(2));
}

solve(["48", "10", "3.3", "6.5", "1.7"]);
