function solve(input) {
  const recordInSeconds = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timeInSecondsFor1m = Number(input[2]);

  const neededToHike = distanceInMeters * timeInSecondsFor1m;
  const deley = Math.floor(distanceInMeters / 50) * 30;
  const totalTime = neededToHike + deley;

  const diff = Math.abs(totalTime - recordInSeconds);

  if (totalTime < recordInSeconds) {
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}

solve(["10164", "1400", "25"]);
solve(["5554.36", "1340", "3.23"]);
