function suitcasesLoad(input) {
  let index = 0;
  let trunkSpace = Number(input[index]);
  index++;
  let luggageCounter = 1;
  let command = input[index];
  index++;
  while (command !== "End") {
    let tempLuggage = Number(command);
    if (luggageCounter % 3 === 0) {
      trunkSpace -= tempLuggage * 1.1;
    } else {
      trunkSpace -= tempLuggage;
    }
    if (trunkSpace < 0) {
      break;
    }
    luggageCounter++;
    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log("Congratulations! All suitcases are loaded!");
    console.log(`Statistic: ${luggageCounter - 1} suitcases loaded.`);
  } else {
    console.log("No more space!");
    console.log(`Statistic: ${luggageCounter - 1} suitcases loaded.`);
  }
}

suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
