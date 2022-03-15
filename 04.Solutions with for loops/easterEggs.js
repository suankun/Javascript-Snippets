function easterEggs(input) {
  let index = 0;
  const eggsNumber = Number(input[index]);
  let redEggs = 0;
  let orangeEggs = 0;
  let blueEggs = 0;
  let greenEggs = 0;
  for (let i = 0; i <= eggsNumber; i++) {
    const eggColor = input[index];
    index++;
    switch (eggColor) {
      case "red":
        redEggs++;
        break;
      case "orange":
        orangeEggs++;
        break;
      case "blue":
        blueEggs++;
        break;
      case "green":
        greenEggs++;
        break;
    }
  }

  let maxEggCount = redEggs;
  let maxCollor = "red";

  if (orangeEggs > maxEggCount) {
    maxEggCount = orangeEggs;
    maxCollor = "orange";
  }
  if (blueEggs > maxEggCount) {
    maxEggCount = blueEggs;
    maxCollor = "blue";
  }
  if (greenEggs > maxEggCount) {
    maxEggCount = greenEggs;
    maxCollor = "green";
  }

  console.log(`Red eggs: ${redEggs}`);
  console.log(`Orange eggs: ${orangeEggs}`);
  console.log(`Blue eggs: ${blueEggs}`);
  console.log(`Green eggs: ${greenEggs}`);
  console.log(`Max eggs: ${maxEggCount} -> ${maxCollor}`);
}

easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
