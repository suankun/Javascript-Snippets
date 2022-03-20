function solve(input) {
  const budget = Number(input[0]);
  const litersNeeded = Number(input[1]);
  const dayOfWeek = input[2];
  // В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
  const pricePerLiter = 2.1;
  const priceForGuide = 100;

  const priceForFuel = litersNeeded * pricePerLiter;
  let totalPrice = priceForFuel + priceForGuide;

  if (dayOfWeek == "Saturday") {
    totalPrice *= 0.9;
  } else if (dayOfWeek == "Sunday") {
    totalPrice *= 0.8;
  }

  const diff = Math.abs(budget - totalPrice);

  if (budget >= totalPrice) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}

solve(["1000", "10", "Sunday"]);
solve(["120", "30", "Saturday"]);
solve(["105.20", "15", "Sunday"]);
