function skiTrip(input) {
  const daysStay = Number(input[0]);
  const typeOfRoom = input[1];
  const rate = input[2];
  const roomPrice = 18;
  const apartmentPrice = 25;
  const presApartmentPrice = 35;
  let totalCost = 0;

  switch (typeOfRoom) {
    case "room for one person":
      totalCost = (daysStay - 1) * roomPrice;
      break;
    case "apartment":
      totalCost = (daysStay - 1) * apartmentPrice;
      if (daysStay < 10) {
        totalCost -= totalCost * 0.3;
      } else if (daysStay >= 10 && daysStay <= 15) {
        totalCost -= totalCost * 0.35;
      } else if (daysStay > 15) {
        totalCost -= totalCost * 0.5;
      }
      break;
    case "president apartment":
      totalCost = (daysStay - 1) * presApartmentPrice;
      if (daysStay < 10) {
        totalCost -= totalCost * 0.1;
      } else if (daysStay >= 10 && daysStay <= 15) {
        totalCost -= totalCost * 0.15;
      } else if (daysStay > 15) {
        totalCost -= totalCost * 0.2;
      }
      break;
  }

  if (rate === "positive") {
    totalCost += totalCost * 0.25;
  } else if (rate === "negative") {
    totalCost -= totalCost * 0.1;
  }

  console.log(totalCost.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
