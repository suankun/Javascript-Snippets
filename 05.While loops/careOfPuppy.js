function careOfPuppy(input) {
  let index = 0;
  let totalFood = Number(input[index]) * 1000;
  index++;
  let command = input[index];
  index++;
  while (command !== "Adopted") {
    let daylyFoodEaten = Number(command);
    totalFood -= daylyFoodEaten;
    command = input[index];
    index++;
  }
  if (totalFood >= 0) {
    console.log(`Food is enough! Leftovers: ${totalFood} grams.`);
  } else {
    console.log(
      `Food is not enough. You need ${Math.abs(totalFood)} grams more.`
    );
  }
}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
