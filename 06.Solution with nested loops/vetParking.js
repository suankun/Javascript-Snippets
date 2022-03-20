function vetParking(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  const hours = Number(input[index]);
  index++;
  let totalCost = 0;
  for (let day = 1; day <= days; day++) {
    let totalCostPerDay = 0;
    for (let hour = 1; hour <= hours; hour++) {
      if (day % 2 !== 0 && hour % 2 === 0) {
        totalCostPerDay += 1.25;
      } else if (day % 2 === 0 && hour % 2 !== 0) {
        totalCostPerDay += 2.5;
      } else {
        totalCostPerDay += 1;
      }
    }
    totalCost += totalCostPerDay;
    console.log(`Day: ${day} - ${totalCostPerDay.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalCost.toFixed(2)} leva`);
}

vetParking(["2", "5"]);
vetParking(["5", "2"]);
