function oscarsWeekInCinema(input) {
  const movieName = input[0];
  const hallType = input[1];
  const tickets = Number(input[2]);
  let income = 0;

  switch (movieName) {
    case "A Star Is Born":
      switch (hallType) {
        case "normal":
          income = 7.5 * tickets;
          break;
        case "luxury":
          income = 10.5 * tickets;
          break;
        case "ultra luxury":
          income = 13.5 * tickets;
          break;
      }
      break;
    case "Bohemian Rhapsody":
      switch (hallType) {
        case "normal":
          income = 7.35 * tickets;
          break;
        case "luxury":
          income = 9.45 * tickets;
          break;
        case "ultra luxury":
          income = 12.75 * tickets;
          break;
      }
      break;
    case "Green Book":
      switch (hallType) {
        case "normal":
          income = 8.15 * tickets;
          break;
        case "luxury":
          income = 10.25 * tickets;
          break;
        case "ultra luxury":
          income = 13.25 * tickets;
          break;
      }
      break;
    case "The Favourite":
      switch (hallType) {
        case "normal":
          income = 8.75 * tickets;
          break;
        case "luxury":
          income = 11.55 * tickets;
          break;
        case "ultra luxury":
          income = 13.95 * tickets;
          break;
      }
      break;
  }
  console.log(`${movieName} -> ${income.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
oscarsWeekInCinema(["Green Book", "normal", "63"]);
oscarsWeekInCinema(["The Favourite", "ultra luxury", "34"]);
