function solve(input) {
  const priceTenisRocket = Number(input[0]);
  const qtyTenisRocket = Number(input[1]);
  const qtyRunners = Number(input[2]);

  const priceRunners = priceTenisRocket / 6;

  const totalPriceTenisRockets = priceTenisRocket * qtyTenisRocket;
  const totalPriceRunners = priceRunners * qtyRunners;
  const addEquipment = (totalPriceTenisRockets + totalPriceRunners) * 0.2;

  const totalPrice = totalPriceTenisRockets + totalPriceRunners + addEquipment;
  const jokovich = totalPrice / 8;
  const sponsors = (totalPrice * 7) / 8;

  console.log(`Price to be paid by Djokovic ${Math.floor(jokovich)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}

solve(["850", "4", "2"]);
