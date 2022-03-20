function solve(input) {
  const timeForShots = Number(input[0]);
  const numberOfScenes = Number(input[1]);
  const sceneDuration = Number(input[2]);

  const fieldPreparation = timeForShots * 0.15;
  const totalTimeForShots = numberOfScenes * sceneDuration;

  const timeNeeded = fieldPreparation + totalTimeForShots;

  const diff = Math.abs(timeForShots - timeNeeded);

  if (timeForShots >= timeNeeded) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        diff
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(diff)} minutes.`
    );
  }
}

solve(["120", "10", "11"]);
solve(["60", "15", "3"]);
