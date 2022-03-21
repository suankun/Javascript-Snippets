function vacation(peopleNumber, groupType, dayOfTheWeek) {
  let totalCost = 0;
  switch (groupType) {
    case "Students":
      switch (dayOfTheWeek) {
        case "Friday":
          totalCost = 8.45;
          break;
        case "Saturday":
          totalCost = 9.8;
          break;
        case "Sunday":
          totalCost = 10.46;
          break;
      }
      if (peopleNumber >= 30) {
        totalCost -= totalCost * 0.15;
      }
      break;
    case "Business":
      switch (dayOfTheWeek) {
        case "Friday":
          totalCost = 10.9;
          break;
        case "Saturday":
          totalCost = 15.6;
          break;
        case "Sunday":
          totalCost = 16;
          break;
      }
      if (peopleNumber >= 100) {
        peopleNumber -= 10;
      }
      break;
    case "Regular":
      switch (dayOfTheWeek) {
        case "Friday":
          totalCost = 15;
          break;
        case "Saturday":
          totalCost = 20;
          break;
        case "Sunday":
          totalCost = 22.5;
          break;
      }
      if (peopleNumber >= 10 && peopleNumber <= 20) {
        totalCost -= totalCost * 0.05;
      }
      break;
  }
  totalCost = totalCost * peopleNumber;
  console.log(`Total price: ${totalCost.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
