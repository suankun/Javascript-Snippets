function travelAgency(input) {
  const cityName = input[0];
  const packType = input[1];
  const VIPDiscount = input[2];
  const daysStay = Number(input[3]);
  let totalCost = 0;
  let isCorrect = false;
  switch (cityName) {
    case "Bansko":
    case "Borovets":
      switch (packType) {
        case "withEquipment":
          totalCost = 100;
          if (VIPDiscount === "yes") {
            totalCost -= totalCost * 0.1;
          }
          break;
        case "noEquipment":
          totalCost = 80;
          if (VIPDiscount === "yes") {
            totalCost -= totalCost * 0.05;
          }
          break;
        default:
          console.log("Invalid input!");
          break;
      }
      break;
    case "Varna":
    case "Burgas":
      switch (packType) {
        case "withBreakfast":
          totalCost = 130;
          if (VIPDiscount === "yes") {
            totalCost -= totalCost * 0.12;
          }
          break;
        case "noBreakfast":
          totalCost = 100;
          if (VIPDiscount === "yes") {
            totalCost -= totalCost * 0.07;
          }
          break;
        default:
          isCorrect = true;
          console.log("Invalid input!");
          break;
      }
      break;
    default:
      isCorrect = true;
      console.log("Invalid input!");
      break;
  }
  if (daysStay <= 0) {
    isCorrect = true;
    console.log(`Days must be positive number!`);
  }
  if (!isCorrect && daysStay <= 7) {
    console.log(
      `The price is ${(totalCost * daysStay).toFixed(2)}lv! Have a nice time!`
    );
  } else if (!isCorrect && daysStay > 7) {
    console.log(
      `The price is ${(totalCost * (daysStay - 1)).toFixed(
        2
      )}lv! Have a nice time!`
    );
  }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Borovets", "noEquipment", "yes", "8"]); // The price is 532.00lv! Have a nice time!
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
