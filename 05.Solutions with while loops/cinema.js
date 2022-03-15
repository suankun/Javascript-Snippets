function cinema(input) {
  let index = 0;
  let hallCapacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let ticketPrice = 5;
  let income = 0;
  while (command !== "Movie time!") {
    const currentNumberOfPeople = Number(command);
    if (hallCapacity >= currentNumberOfPeople) {
      hallCapacity -= currentNumberOfPeople;
    } else {
      console.log(`The cinema is full.`);
      console.log(`Cinema income - ${income} lv.`);
      break;
    }
    if (currentNumberOfPeople % 3 === 0) {
      income += currentNumberOfPeople * ticketPrice - 5;
    } else {
      income += currentNumberOfPeople * ticketPrice;
    }
    command = input[index];
    index++;
  }
  if (command === "Movie time!") {
    console.log(`There are ${hallCapacity} seats left in the cinema.`);
    console.log(`Cinema income - ${income} lv.`);
  }
}

cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
cinema(["50", "15", "10", "10", "15", "5"]);
cinema([
  "100",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "Movie time!",
]);
