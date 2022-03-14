function solve(input) {
  const type = input[0];
  const r = Number(input[1]);
  const c = Number(input[2]);

  const ticketPremiere = 12;
  const ticketNormal = 7.5;
  const ticketDiscount = 5;

  let price = r * c;

  switch (type) {
    case "Premiere":
      price *= ticketPremiere;
      break;
    case "Normal":
      price *= ticketNormal;
      break;
    case "Discount":
      price *= ticketDiscount;
      break;
  }

  console.log(`${price.toFixed(2)} leva`);
}

solve(["Premiere", "10", "12"]);
solve(["Normal", "21", "13"]);
solve(["Discount", "12", "30"]);
