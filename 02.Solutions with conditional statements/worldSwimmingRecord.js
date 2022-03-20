function solve(input) {
  const recInSec = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timeInSecPerMeter = Number(input[2]);

  const delay = Math.floor(distanceInMeters / 15) * 12.5;
  const distance = distanceInMeters * timeInSecPerMeter + delay;

  if (distance < recInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${distance.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(distance - recInSec).toFixed(
        2
      )} seconds slower.`
    );
  }
}

solve(["10464", "1500", "20"]);
solve(["55555.67", "3017", "5.03"]);
