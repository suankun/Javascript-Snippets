function darts(input) {
  let index = 0;
  const playerName = input[index];
  index++;
  let initialPoints = 301;
  let command = input[index];
  index++;
  let successfulShotsCounter = 0;
  let unsuccessfulShotsCounter = 0;
  while (command !== "Retire") {
    let sector = command;
    let tempPoints = Number(input[index]);
    index++;
    let curPoints = 0;
    switch (sector) {
      case "Single":
        curPoints = tempPoints;
        break;
      case "Double":
        curPoints = tempPoints * 2;
        break;
      case "Triple":
        curPoints = tempPoints * 3;
        break;
    }
    if (curPoints <= initialPoints) {
      successfulShotsCounter++;
      initialPoints -= curPoints;
    } else {
      unsuccessfulShotsCounter++;
    }
    if (initialPoints === 0) {
      console.log(
        `${playerName} won the leg with ${successfulShotsCounter} shots.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Retire") {
    console.log(
      `${playerName} retired after ${unsuccessfulShotsCounter} unsuccessful shots.`
    );
  }
}

darts([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);
darts([
  "Stephen Bunting",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "7",
  "Single",
  "12",
  "Double",
  "1",
  "Single",
  "1",
]);
darts([
  "Rob Cross",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
  "Triple",
  "20",
  "Double",
  "5",
  "Triple",
  "10",
  "Double",
  "6",
  "Retire",
]);
