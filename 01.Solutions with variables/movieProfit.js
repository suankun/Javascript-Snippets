function solve(input) {
  const nameOfTheMovie = input[0];
  const numberOfDays = Number(input[1]);
  const numberOfTickets = Number(input[2]);
  const priceOfTickets = Number(input[3]);
  const percentForTheCinema = Number(input[4]);

  const priceOfAllTickets = numberOfTickets * priceOfTickets;
  const incomeTotal = numberOfDays * priceOfAllTickets;
  const taxCinema = (incomeTotal * percentForTheCinema) / 100;

  const totalMovieIncome = incomeTotal - taxCinema;

  console.log(
    `The profit from the movie ${nameOfTheMovie} is ${totalMovieIncome.toFixed(
      2
    )} lv.`
  );
}

solve(["The Programmer", "20", "500", "7.50", "7"]);
