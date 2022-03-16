function trainTheTrainers(input) {
  let index = 0;
  const gradesNum = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let totalAvrAssessment = 0;
  let counter = 0;
  while (command !== "Finish") {
    counter++;
    let tempAssessment = 0;
    for (let i = 0; i < gradesNum; i++) {
      const tempGrade = Number(input[index]);
      index++;
      tempAssessment += tempGrade;
    }
    tempAssessment /= gradesNum;
    totalAvrAssessment += tempAssessment;
    console.log(`${command} - ${tempAssessment.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  console.log(
    `Student's final assessment is ${(totalAvrAssessment / counter).toFixed(
      2
    )}.`
  );
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
