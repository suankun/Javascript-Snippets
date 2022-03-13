function foodForPets(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  const totalFood = Number(input[index]);
  index++;
  let biscuits = 0;
  let foodEatenFromDog = 0;
  let foodEatenFromCat = 0;
  for (let i = 1; i <= days; i++) {
    let tempFoodDog = Number(input[index]);
    index++;
    let tempFoodCat = Number(input[index]);
    index++;
    if (i % 3 === 0) {
      biscuits = (tempFoodDog + tempFoodCat) * 0.1;
    }
    foodEatenFromDog += tempFoodDog;
    foodEatenFromCat += tempFoodCat;
  }
  const totalFoodEaten = foodEatenFromDog + foodEatenFromCat;
  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(
    `${`${(totalFoodEaten / totalFood) * 100}`}% of the food has been eaten.`
  );
  console.log(
    `${`${((foodEatenFromDog / totalFoodEaten) * 100).toFixed(
      2
    )}`}% eaten from the dog.`
  );
  console.log(
    `${`${((foodEatenFromCat / totalFoodEaten) * 100).toFixed(
      2
    )}`}% eaten from the cat.`
  );
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
