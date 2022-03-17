function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalTickets = 0;
  let isFull = false;
  let student = 0;
  let standard = 0;
  let kid = 0;
  while (command !== "Finish") {
    let ticketsCounter = 0;
    let totalTicketsInCinema = Number(input[index]);
    index++;
    let tempCommand = input[index];
    index++;
    while (tempCommand !== "End") {
      totalTickets++;
      ticketsCounter++;
      switch (tempCommand) {
        case "student":
          student++;
          break;
        case "standard":
          standard++;
          break;
        case "kid":
          kid++;
          break;
      }
      if (ticketsCounter === totalTicketsInCinema) {
        isFull = true;
        break;
      }
      tempCommand = input[index];
      index++;
    }
    console.log(
      `${command} - ${((ticketsCounter / totalTicketsInCinema) * 100).toFixed(
        2
      )}% full.`
    );
    command = input[index];
    index++;
  }

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((student / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
