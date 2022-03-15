function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;
  let goals = 0;
  let bestPlayer = "";
  while (command !== "END") {
    const tempGoals = Number(input[index]);
    index++;
    if (tempGoals > goals) {
      goals = tempGoals;
      bestPlayer = command;
    }
    if (goals >= 10) {
      break;
    }
    command = input[index];
    index++;
  }

  if (goals >= 3) {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${goals} goals.`);
  }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
