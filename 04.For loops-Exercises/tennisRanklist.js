function tennisRanklist(input) {
  let index = 0;
  const tournaments = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let winPoints = 0;
  let winTounaments = 0;
  for (let i = 0; i <= tournaments; i++) {
    let tournamentResult = input[index];
    index++;
    switch (tournamentResult) {
      case "W":
        winPoints += 2000;
        winTounaments++;
        break;
      case "F":
        winPoints += 1200;
        break;
      case "SF":
        winPoints += 720;
        break;
    }
  }
  console.log(`Final points: ${winPoints + startPoints}`);
  console.log(`Average points: ${Math.floor(winPoints / tournaments)}`);
  console.log(`${((winTounaments / tournaments) * 100).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
