function footballTournament(input) {
  let index = 0;
  const teamName = input[index];
  index++;
  const playedMatches = Number(input[index]);
  index++;
  let w = 0;
  let d = 0;
  let l = 0;
  for (let i = 0; i < playedMatches; i++) {
    const matchRes = input[index];
    index++;
    switch (matchRes) {
      case "W":
        w++;
        break;
      case "D":
        d++;
        break;
      case "L":
        l++;
        break;
    }
  }
  if (playedMatches === 0) {
    console.log(`${teamName} hasn't played any games during this season.`);
  } else {
    console.log(
      `${teamName} has won ${w * 3 + d * 1} points during this season.`
    );
    console.log(`Total stats:`);
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${((w / playedMatches) * 100).toFixed(2)}%`);
  }
}

footballTournament([
  "Liverpool",
  "10",
  "W",
  "D",
  "D",
  "W",
  "L",
  "W",
  "D",
  "D",
  "W",
  "W",
]);
