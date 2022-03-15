function coffeeMachine(input) {
  const drink = input[0];
  const sugar = input[1];
  const numberOfDrinks = input[2];
  let price = 0;

  switch (drink) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          price = 0.9 * numberOfDrinks;
          price -= price * 0.35;
          break;
        case "Normal":
          price = 1 * numberOfDrinks;
          break;
        case "Extra":
          price = 1.2 * numberOfDrinks;
          break;
      }
      if (numberOfDrinks >= 5) {
        price -= price * 0.25;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          price = 1 * numberOfDrinks;
          price -= price * 0.35;
          break;
        case "Normal":
          price = 1.2 * numberOfDrinks;
          break;
        case "Extra":
          price = 1.6 * numberOfDrinks;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          price = 0.5 * numberOfDrinks;
          price -= price * 0.35;
          break;
        case "Normal":
          price = 0.6 * numberOfDrinks;
          break;
        case "Extra":
          price = 0.7 * numberOfDrinks;
          break;
      }
      break;
  }
  if (price > 15) {
    price -= price * 0.2;
  }
  console.log(
    `You bought ${numberOfDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`
  );
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
