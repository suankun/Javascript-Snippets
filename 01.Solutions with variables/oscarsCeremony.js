function solve(input) {
  const rent = Number(input[0]);

  const priceOfTheOscars = rent * 0.7;
  const priceOfCatering = priceOfTheOscars * 0.85;
  const priceOfTheSound = priceOfCatering / 2;

  const totalPriceOfExpenses =
    rent + priceOfTheOscars + priceOfCatering + priceOfTheSound;

  console.log(totalPriceOfExpenses.toFixed(2));
}

solve(["3500"]);
