function oldBooks(input) {
  let index = 0;
  const searchedBook = input[index];
  index++;
  let counter = 0;
  let command = input[index];
  index++;
  let isFound = false;
  while (command !== "No More Books") {
    if (command === searchedBook) {
      isFound = true;
      console.log(`You checked ${counter} books and found it.`);
      break;
    }
    counter++;
    command = input[index];
    index++;
  }
  if (!isFound) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
  }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
