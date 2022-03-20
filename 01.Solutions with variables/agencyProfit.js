function solve(input) {
  const name = input[0];
  const countAdultsTicket = Number(input[1]);
  const countChildrenTicket = Number(input[2]);
  const priceAdultTicket = Number(input[3]);
  const priceService = Number(input[4]);

  const priceChilrenTicket = priceAdultTicket * 0.3;

  const priceAdultTicketService = priceAdultTicket + priceService;
  const priceChilrenTicketService = priceChilrenTicket + priceService;
  const totalPriceOfAllTickets =
    countAdultsTicket * priceAdultTicketService +
    countChildrenTicket * priceChilrenTicketService;

  const profit = totalPriceOfAllTickets * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`
  );
}

solve(["WizzAir", "15", "5", "120", "40"]);
