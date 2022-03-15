function fishingBoat(input) {
  const budget = Number(input[0]);
  const season = input[1];
  const fishermen = Number(input[2]);
  const rentSpring = 3000;
  const rentSummer = 4200;
  const rentAutumn = 4200;
  const rentWinter = 2600;
  let boatRent = 0;

  switch (season) {
    case "Spring":
      boatRent = rentSpring;
      break;
    case "Summer":
      boatRent = rentSummer;
      break;
    case "Autumn":
      boatRent = rentAutumn;
      break;
    case "Winter":
      boatRent = rentWinter;
      break;
  }

  if (fishermen <= 6) {
    boatRent -= boatRent * 0.1;
  } else if (fishermen >= 7 && fishermen <= 11) {
    boatRent -= boatRent * 0.15;
  } else if (fishermen >= 12) {
    boatRent -= boatRent * 0.25;
  }

  if (fishermen % 2 === 0 && season != "Autumn") {
    boatRent -= boatRent * 0.05;
  }

  const diff = Math.abs(budget - boatRent);
  if (budget >= boatRent) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
