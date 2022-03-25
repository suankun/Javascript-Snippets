function dayOfWeek(daysOfWeek) {
  if (daysOfWeek < 1 || daysOfWeek > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let index = daysOfWeek - 1;
    console.log(days[index]);
  }
}

dayOfWeek(1);
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(-1);
dayOfWeek(33);
