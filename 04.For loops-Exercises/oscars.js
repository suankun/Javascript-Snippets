function oscars(input) {
  let index = 0;
  const actorsName = input[index];
  index++;
  let pointsFromAcademy = Number(input[index]);
  index++;
  const countOfJury = Number(input[index]);
  index++;
  let isNominee = false;
  for (let i = 0; i < countOfJury; i++) {
    let nameOfJury = input[index];
    index++;
    let evaluation = Number(input[index]);
    index++;
    pointsFromAcademy += (nameOfJury.length * evaluation) / 2;
    if (pointsFromAcademy > 1250.5) {
      isNominee = true;
      console.log(
        `Congratulations, ${actorsName} got a nominee for leading role with ${pointsFromAcademy.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (!isNominee) {
    console.log(
      `Sorry, ${actorsName} you need ${(1250.5 - pointsFromAcademy).toFixed(
        1
      )} more!`
    );
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
