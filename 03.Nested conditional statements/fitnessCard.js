function fitnessCard(input) {
  const budget = Number(input[0]);
  const sex = input[1];
  const age = Number(input[2]);
  const sport = input[3];
  let totalCost = 0;
  switch (sport) {
    case "Gym":
      if (sex === "m") {
        totalCost = 42;
      } else if (sex === "f") {
        totalCost = 35;
      }
      break;
    case "Boxing":
      if (sex === "m") {
        totalCost = 41;
      } else if (sex === "f") {
        totalCost = 37;
      }
      break;
    case "Yoga":
      if (sex === "m") {
        totalCost = 45;
      } else if (sex === "f") {
        totalCost = 42;
      }
      break;
    case "Zumba":
      if (sex === "m") {
        totalCost = 34;
      } else if (sex === "f") {
        totalCost = 31;
      }
      break;
    case "Dances":
      if (sex === "m") {
        totalCost = 51;
      } else if (sex === "f") {
        totalCost = 53;
      }
      break;
    case "Pilates":
      if (sex === "m") {
        totalCost = 39;
      } else if (sex === "f") {
        totalCost = 37;
      }
      break;
  }
  if (age <= 19) {
    totalCost -= totalCost * 0.2;
  }
  if (budget >= totalCost) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(totalCost - budget).toFixed(
        2
      )} more.`
    );
  }
}

fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"]);
