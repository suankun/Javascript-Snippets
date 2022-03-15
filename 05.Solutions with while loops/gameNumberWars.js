function gameNumberWars(input) {
  const firstPlayerName = input[0];
  const secondPlayerName = input[1];
  let index = 2;
  let firstPlayerPoints = 0;
  let secondPlayerPoints = 0;
  let command = input[index];
  index++;
  while (command !== "End of game") {
    let tempCardFirstPlayer = Number(command);
    let tempCardSecondPlayer = Number(input[index]);
    index++;
    if (tempCardFirstPlayer > tempCardSecondPlayer) {
      firstPlayerPoints += tempCardFirstPlayer - tempCardSecondPlayer;
    } else if (tempCardFirstPlayer < tempCardSecondPlayer) {
      secondPlayerPoints += tempCardSecondPlayer - tempCardFirstPlayer;
    } else if (tempCardFirstPlayer === tempCardSecondPlayer) {
      break;
    }
    command = input[index];
    index++;
  }
  const lastCardFirstPlayer = Number(input[index]);
  index++;
  const lastCardSecondPlayer = Number(input[index]);
  index++;
  if (command !== "End of game") {
    if (lastCardFirstPlayer > lastCardSecondPlayer) {
      console.log("Number wars!");
      console.log(
        `${firstPlayerName} is winner with ${firstPlayerPoints} points`
      );
    } else if (lastCardFirstPlayer < lastCardSecondPlayer) {
      console.log("Number wars!");
      console.log(
        `${secondPlayerName} is winner with ${secondPlayerPoints} points`
      );
    }
  } else {
    console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
    console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
  }
}

gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNumberWars([
  "Elena",
  "Simeon",
  "6",
  "3",
  "2",
  "5",
  "8",
  "9",
  "End of game",
]);
gameNumberWars([
  "Aleks",
  "Georgi",
  "4",
  "5",
  "3",
  "2",
  "4",
  "3",
  "4",
  "4",
  "5",
  "2",
]);
