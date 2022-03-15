function onTimeForTheExam(input) {
  const hourExam = Number(input[0]);
  const minuteExam = Number(input[1]);
  const hourArrive = Number(input[2]);
  const minuteArrive = Number(input[3]);

  const hourExamInMin = hourExam * 60 + minuteExam;
  const hourArriveInMin = hourArrive * 60 + minuteArrive;
  const diff = Math.abs(hourExamInMin - hourArriveInMin);
  const hrsDiff = Math.floor(diff / 60);
  let minDiff = diff % 60;

  if (minDiff >= 0 && minDiff < 10 && hrsDiff > 0) {
    minDiff = `0${minDiff}`;
  }

  if (hourExamInMin < hourArriveInMin && diff < 60) {
    console.log("Late");
    console.log(`${diff} minutes after the start`);
  } else if (hourExamInMin < hourArriveInMin && diff >= 60) {
    console.log("Late");
    console.log(`${hrsDiff}:${minDiff} hours after the start`);
  } else if (hourExamInMin === hourArriveInMin) {
    console.log("On time");
  } else if (hourExamInMin > hourArriveInMin && diff <= 30) {
    console.log("On time");
    console.log(`${minDiff} minutes before the start`);
  } else if (hourExamInMin > hourArriveInMin && diff > 30 && diff < 60) {
    console.log("Early");
    console.log(`${minDiff} minutes before the start`);
  } else if (hourExamInMin > hourArriveInMin && diff >= 60) {
    console.log("Early");
    console.log(`${hrsDiff}:${minDiff} hours before the start`);
  }
}

onTimeForTheExam(["9", "30", "9", "50"]); // late
onTimeForTheExam(["9", "00", "8", "30"]); // on time
onTimeForTheExam(["16", "00", "15", "00"]); // early
onTimeForTheExam(["9", "00", "10", "30"]); // late
onTimeForTheExam(["14", "00", "13", "55"]); // on time
onTimeForTheExam(["11", "30", "8", "12"]); // early
onTimeForTheExam(["10", "00", "10", "00"]); // on time
onTimeForTheExam(["11", "30", "10", "55"]); // early
onTimeForTheExam(["11", "30", "12", "29"]); // late
