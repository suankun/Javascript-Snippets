function graduation(input) {
  let index = 0;
  const name = input[index];
  index++;
  let i = 1;
  let totalGrades = 0;
  let counter = 0;
  let isExcluded = false;
  while (i <= 12) {
    let grade = Number(input[index]);
    index++;
    if (grade < 4.0) {
      counter++;
      if (counter < 2) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
      }
      continue;
    }

    totalGrades += grade;
    i++;
  }
  if (!isExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`
    );
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
