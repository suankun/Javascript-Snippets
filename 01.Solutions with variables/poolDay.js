function solve(input) {
  const numberOfPeople = Number(input[0]);
  const entryTax = Number(input[1]);
  const priceOfOneLounge = Number(input[2]);
  const priceOfOneUmbrella = Number(input[3]);

  const totalTaxes = numberOfPeople * entryTax;
  const peopleWithLounges = Math.ceil(numberOfPeople * 0.75);
  const priceOfLoungesRented = peopleWithLounges * priceOfOneLounge;
  const peopleWithUmbrellas = Math.ceil(numberOfPeople * 0.5);
  const priceOfUnbrellasRented = peopleWithUmbrellas * priceOfOneUmbrella;

  const totalPrice = totalTaxes + priceOfLoungesRented + priceOfUnbrellasRented;

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

solve(["21", "5.50", "4.40", "6.20"]);
