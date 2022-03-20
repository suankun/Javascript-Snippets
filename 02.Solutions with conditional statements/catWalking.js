function solve(input) {
  const minWalkPerDay = Number(input[0]);
  const numberOfWalksPerDay = Number(input[1]);
  const caloriesPerDay = Number(input[2]);

  const totalMinWalks = numberOfWalksPerDay * minWalkPerDay;
  const totalBurnedCalories = totalMinWalks * 5;
  const halfOfDailyCalories = caloriesPerDay / 2;

  if (totalBurnedCalories >= halfOfDailyCalories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`
    );
  } else {
    console.log(
      `"No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`
    );
  }
}

solve(["30", "3", "600"]);
solve(["15", "2", "500"]);
