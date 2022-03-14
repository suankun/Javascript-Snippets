function renovation(input) {
  const h = Number(input[0]);
  const w = Number(input[1]);
  const windows = Number(input[2]);
  let totalWallsForPaintWithWindows = h * w * 4 - h * w * 4 * (windows / 100);
  let index = 3;
  let command = input[index];
  index++;
  while (command !== "Tired!") {
    const tempPaintedWalls = Number(command);
    totalWallsForPaintWithWindows -= tempPaintedWalls;
    if (totalWallsForPaintWithWindows < 0) {
      console.log(
        `All walls are painted and you have ${Math.abs(
          totalWallsForPaintWithWindows
        )} l paint left!`
      );
      break;
    } else if (totalWallsForPaintWithWindows === 0) {
      console.log(`All walls are painted! Great job, Pesho!`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Tired!") {
    console.log(`${totalWallsForPaintWithWindows} quadratic m left.`);
  }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);
