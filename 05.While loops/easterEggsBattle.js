function easterEggsBattle(input) {
  let index = 0;
  let playerOneEggs = Number(input[index]);
  index++;
  let playerTwoEggs = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  while (command !== "End of battle") {
    let roundResult = command;
    switch (roundResult) {
      case "one":
        playerTwoEggs--;
        break;
      case "two":
        playerOneEggs--;
        break;
    }
    if (playerOneEggs === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`
      );
      break;
    } else if (playerTwoEggs === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "End of battle") {
    console.log(`Player one has ${playerOneEggs} eggs left.`);
    console.log(`Player two has ${playerTwoEggs} eggs left.`);
  }
}

easterEggsBattle([
  "5",
  "4",
  "one",
  "two",
  "one",
  "two",
  "two",
  "End of battle",
]);
easterEggsBattle(["2", "6", "one", "two", "two"]);
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);
