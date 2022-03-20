function solve(input) {
  const minutes = Number(input[0]);
  const seconds = Number(input[1]);
  const lengthOfGutterInMeters = Number(input[2]);
  const secondsToTravel100meters = Number(input[3]);

  const kontrolataInSeconds = minutes * 60 + seconds;
  const delay = lengthOfGutterInMeters / 120;
  const totalDelay = delay * 2.5;

  const finalTime =
    (lengthOfGutterInMeters / 100) * secondsToTravel100meters - totalDelay;

  if (finalTime <= kontrolataInSeconds) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${finalTime.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${(finalTime - kontrolataInSeconds).toFixed(
        3
      )} second slower.`
    );
  }
}

solve(["2", "12", "1200", "10"]);
solve(["1", "20", "1546", "12"]);
