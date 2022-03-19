function theMostPowerfulWord(input) {
  let index = 0;
  let command = input[index];
  index++;
  let theWord = "";
  let thePoints = 0;
  while (command !== "End of words") {
    let totalPoints = 0;
    for (let i = 0; i < command.length; i++) {
      let tempPoints = command.charCodeAt(i);
      totalPoints += tempPoints;
    }
    switch (command.toUpperCase().charAt(0)) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "Y":
        totalPoints *= command.length;
        break;
      default:
        totalPoints = Math.floor(totalPoints / command.length);
        break;
    }
    if (thePoints < totalPoints) {
      theWord = command;
      thePoints = totalPoints;
    }
    command = input[index];
    index++;
  }
  console.log(`The most powerful word is ${theWord} - ${thePoints}`);
}

theMostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
theMostPowerfulWord([
  "But",
  "Some",
  "People",
  "Say",
  "It's",
  "LOVE",
  "End of words",
]);
