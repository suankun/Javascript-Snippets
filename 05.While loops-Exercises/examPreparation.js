function examPreparation(input) {
  let index = 0;
  const countOfBadGrades = Number(input[index]);
  index++;
  let exam = input[index];
  index++;
  let totalGrades = 0;
  let counterOfProblems = 0;
  let badGradesCounter = 0;
  let lastExam = "";
  while (exam !== "Enough") {
    counterOfProblems++;
    lastExam = exam;
    let curGrade = Number(input[index]);
    index++;
    if (curGrade <= 4.0) {
      badGradesCounter++;
    }
    if (badGradesCounter === countOfBadGrades) {
      console.log(`You need a break, ${countOfBadGrades} poor grades.`);
      break;
    }
    totalGrades += curGrade;
    exam = input[index];
    index++;
  }
  if (exam === "Enough") {
    console.log(
      `Average score: ${(totalGrades / counterOfProblems).toFixed(2)}`
    );
    console.log(`Number of problems: ${counterOfProblems}`);
    console.log(`Last problem: ${lastExam}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "SpringTime",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "GameInfo", "6", "BestPlayer", "4"]);
