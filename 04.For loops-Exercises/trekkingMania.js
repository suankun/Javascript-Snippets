function trekkingMania(input) {
  let index = 0;
  const groupsCount = Number(input[index]);
  index++;
  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;
  let totalNumberOfPeople = 0;

  for (let i = 0; i < groupsCount; i++) {
    let peopleInGroup = Number(input[index]);
    index++;
    totalNumberOfPeople += peopleInGroup;
    if (peopleInGroup <= 5) {
      musala += peopleInGroup;
    } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
      monblan += peopleInGroup;
    } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
      kilimandjaro += peopleInGroup;
    } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
      k2 += peopleInGroup;
    } else if (peopleInGroup >= 41) {
      everest += peopleInGroup;
    }
  }
  console.log(`${((musala / totalNumberOfPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblan / totalNumberOfPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimandjaro / totalNumberOfPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalNumberOfPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalNumberOfPeople) * 100).toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
