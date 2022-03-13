function cinemaVoucher(input) {
  let index = 0;
  let voucher = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let tickets = 0;
  let items = 0;
  while (command !== "End") {
    let cost = 0;
    if (command.length > 8) {
      cost = Number(command.charCodeAt(0)) + Number(command.charCodeAt(1));
    } else if (command.length <= 8) {
      cost = Number(command.charCodeAt(0));
    }
    if (cost <= voucher && command.length > 8) {
      voucher -= cost;
      tickets++;
    } else if (cost <= voucher && command.length <= 8) {
      voucher -= cost;
      items++;
    } else if (cost > voucher) {
      break;
    }
    command = input[index];
    index++;
  }
  console.log(`${tickets}`);
  console.log(`${items}`);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
