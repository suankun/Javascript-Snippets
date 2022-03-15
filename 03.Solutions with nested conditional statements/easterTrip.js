function easterTrip(input) {
  const destination = input[0];
  const dates = input[1];
  const nights = input[2];
  let totalCost = 0;
  switch (destination) {
    case "France":
      switch (dates) {
        case "21-23":
          totalCost = nights * 30;
          break;
        case "24-27":
          totalCost = nights * 35;
          break;
        case "28-31":
          totalCost = nights * 40;
          break;
      }
      break;
    case "Italy":
      switch (dates) {
        case "21-23":
          totalCost = nights * 28;
          break;
        case "24-27":
          totalCost = nights * 32;
          break;
        case "28-31":
          totalCost = nights * 39;
          break;
      }
      break;
    case "Germany":
      switch (dates) {
        case "21-23":
          totalCost = nights * 32;
          break;
        case "24-27":
          totalCost = nights * 37;
          break;
        case "28-31":
          totalCost = nights * 43;
          break;
      }
      break;
  }
  console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
