function solve(input) {
  const firTime = Number(input[0]);
  const secTime = Number(input[1]);
  const thrTime = Number(input[2]);

  let totalTime = firTime + secTime + thrTime;
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

solve(["35", "45", "44"]);
solve(["22", "7", "34"]);
solve(["14", "12", "10"]);
