function solve(input) {
  const name = input[0];
  const episodeLength = Number(input[1]);
  const lunchBreak = Number(input[2]);

  const lunchTime = lunchBreak * (1 / 8);
  const relaxTime = lunchBreak * (1 / 4);
  const restOfTime = lunchBreak - lunchTime - relaxTime;

  const diff = Math.abs(episodeLength - restOfTime);

  if (restOfTime >= episodeLength) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        diff
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        diff
      )} more minutes.`
    );
  }
}

solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf", "48", "60"]);
