function filmPremiere(input) {
  const movie = input[0];
  const pack = input[1];
  const tickets = Number(input[2]);
  let totalCost = 0;
  switch (movie) {
    case "John Wick":
      switch (pack) {
        case "Drink":
          totalCost = 12 * tickets;
          break;
        case "Popcorn":
          totalCost = 15 * tickets;
          break;
        case "Menu":
          totalCost = 19 * tickets;
          break;
      }
      break;
    case "Star Wars":
      switch (pack) {
        case "Drink":
          totalCost = 18 * tickets;
          break;
        case "Popcorn":
          totalCost = 25 * tickets;
          break;
        case "Menu":
          totalCost = 30 * tickets;
          break;
      }
      if (tickets >= 4) {
        totalCost -= totalCost * 0.3;
      }
      break;
    case "Jumanji":
      switch (pack) {
        case "Drink":
          totalCost = 9 * tickets;
          break;
        case "Popcorn":
          totalCost = 11 * tickets;
          break;
        case "Menu":
          totalCost = 14 * tickets;
          break;
      }
      if (tickets === 2) {
        totalCost -= totalCost * 0.15;
      }
      break;
  }
  console.log(`Your bill is ${totalCost.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);
