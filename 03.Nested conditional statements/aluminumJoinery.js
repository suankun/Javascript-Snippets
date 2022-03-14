function aluminumJoinery(input) {
  const numberOfJoinery = Number(input[0]);
  const typeOfJoinery = input[1];
  const delivery = input[2];
  let price = 0;

  switch (typeOfJoinery) {
    case "90X130":
      price = 110 * numberOfJoinery;
      if (numberOfJoinery > 30 && numberOfJoinery <= 60) {
        price -= price * 0.05;
      } else if (numberOfJoinery > 60) {
        price -= price * 0.08;
      }
      break;
    case "100X150":
      price = 140 * numberOfJoinery;
      if (numberOfJoinery > 40 && numberOfJoinery <= 80) {
        price -= price * 0.06;
      } else if (numberOfJoinery > 80) {
        price -= price * 0.1;
      }
      break;
    case "130X180":
      price = 190 * numberOfJoinery;
      if (numberOfJoinery > 20 && numberOfJoinery <= 50) {
        price -= price * 0.07;
      } else if (numberOfJoinery > 50) {
        price -= price * 0.12;
      }
      break;
    case "200X300":
      price = 250 * numberOfJoinery;
      if (numberOfJoinery > 25 && numberOfJoinery <= 50) {
        price -= price * 0.09;
      } else if (numberOfJoinery > 50) {
        price -= price * 0.14;
      }
      break;
  }

  if (delivery == "With delivery") {
    price += 60;
  }

  if (numberOfJoinery > 99) {
    price -= price * 0.04;
  }

  if (numberOfJoinery < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${price.toFixed(2)} BGN`);
  }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);
