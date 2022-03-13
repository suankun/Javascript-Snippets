function walking(input) {
  let index = 0;
  let command = input[index];
  index++;
  let targetSteps = 10000;
  while (command !== "Going home") {
    let currentSteps = Number(command);
    targetSteps -= currentSteps;
    if (targetSteps <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(targetSteps)} steps over the goal!`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Going home") {
    const stepsToHome = Number(input[index]);
    targetSteps -= stepsToHome;
    if (targetSteps <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(targetSteps)} steps over the goal!`);
    } else {
      console.log(`${Math.abs(targetSteps)} more steps to reach goal.`);
    }
  }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
