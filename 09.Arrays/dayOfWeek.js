/*
 * Function that receives a number and
 * prints the coresponding name of the
 * day of the week in English.
 * - if the number is not a valid day,
 * print "Invalid day!".
 */

function dayOfWeek(daysOfWeek) {
  // Checking if the number is valid day.
  if (daysOfWeek < 1 || daysOfWeek > 7) {
    console.log("Invalid day!");

    // If it is valid printing
    // the correspoding name of the day.
  } else {
    // Creating an array with name of the days.
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    // Printing the result.
    let index = daysOfWeek - 1;
    console.log(days[index]);
  }
}

// User input.
dayOfWeek(1);
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(-1);
dayOfWeek(33);
