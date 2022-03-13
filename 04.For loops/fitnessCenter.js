function fitnessCenter(input) {
  let index = 0;
  const visitors = Number(input[index]);
  index++;
  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let proteinShake = 0;
  let proteinBar = 0;
  for (let i = 0; i < visitors; i++) {
    const command = input[index];
    index++;
    switch (command) {
      case "Back":
        back++;
        break;
      case "Chest":
        chest++;
        break;
      case "Legs":
        legs++;
        break;
      case "Abs":
        abs++;
        break;
      case "Protein shake":
        proteinShake++;
        break;
      case "Protein bar":
        proteinBar++;
        break;
    }
  }
  const totalVisitors = back + chest + legs + abs + proteinShake + proteinBar;
  const workout = back + chest + legs + abs;
  const drink = proteinShake + proteinBar;
  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${((workout / totalVisitors) * 100).toFixed(2)}% - work out`);
  console.log(`${((drink / totalVisitors) * 100).toFixed(2)}% - protein`);
}

fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
fitnessCenter([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
