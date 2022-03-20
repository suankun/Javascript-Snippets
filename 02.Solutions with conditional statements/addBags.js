function solve(input) {
  const priceOfLuggageOver20kg = Number(input[0]);
  const kgLuggage = Number(input[1]);
  const daysToJourney = Number(input[2]);
  const countOfLuggage = Number(input[3]);

  let priceOfLuggage = 0;

  if (kgLuggage < 10) {
    priceOfLuggage = priceOfLuggageOver20kg * 0.2;
  } else if (kgLuggage >= 10 && kgLuggage <= 20) {
    priceOfLuggage = priceOfLuggageOver20kg * 0.5;
  } else if (kgLuggage > 20) {
    priceOfLuggage = priceOfLuggageOver20kg;
  }

  if (daysToJourney > 30) {
    priceOfLuggage *= 1.1;
  } else if (daysToJourney >= 7 && daysToJourney <= 30) {
    priceOfLuggage *= 1.15;
  } else if (daysToJourney < 7) {
    priceOfLuggage *= 1.4;
  }

  console.log(
    `The total price of bags is: ${(priceOfLuggage * countOfLuggage).toFixed(
      2
    )} lv.`
  );
}

solve(["30", "18", "15", "2"]);
solve(["25.50", "5", "36", "6"]);
solve(["63.80", "23", "3", "1"]);
