function hotelRoom(input) {
  const month = input[0];
  const nights = input[1];

  let totalCostApp = 0;
  let totalCostStu = 0;

  switch (month) {
    case "May":
    case "October":
      totalCostStu = 50;
      totalCostApp = 65;
      if (nights > 7 && nights <= 14) {
        totalCostStu -= totalCostStu * 0.05;
      } else if (nights > 14) {
        totalCostStu -= totalCostStu * 0.3;
        totalCostApp -= totalCostApp * 0.1;
      }
      break;
    case "June":
    case "September":
      totalCostStu = 75.2;
      totalCostApp = 68.7;
      if (nights > 14) {
        totalCostStu -= totalCostStu * 0.2;
        totalCostApp -= totalCostApp * 0.1;
      }
      break;
    case "July":
    case "August":
      totalCostStu = 76;
      totalCostApp = 77;
      if (nights > 14) {
        totalCostApp -= totalCostApp * 0.1;
      }
      break;
  }

  console.log(`Apartment: ${(totalCostApp * nights).toFixed(2)} lv.`);
  console.log(`Studio: ${(totalCostStu * nights).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
