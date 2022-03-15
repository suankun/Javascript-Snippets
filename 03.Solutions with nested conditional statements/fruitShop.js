function solve(input) {
  const fruit = input[0];
  const day = input[1];
  const qty = Number(input[2]);
  let price = 0;
  let isError = false;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = qty * 2.5;
          break;
        case "apple":
          price = qty * 1.2;
          break;
        case "orange":
          price = qty * 0.85;
          break;
        case "grapefruit":
          price = qty * 1.45;
          break;
        case "kiwi":
          price = qty * 2.7;
          break;
        case "pineapple":
          price = qty * 5.5;
          break;
        case "grapes":
          price = qty * 3.85;
          break;
        default:
          isError = true;
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = qty * 2.7;
          break;
        case "apple":
          price = qty * 1.25;
          break;
        case "orange":
          price = qty * 0.9;
          break;
        case "grapefruit":
          price = qty * 1.6;
          break;
        case "kiwi":
          price = qty * 3.0;
          break;
        case "pineapple":
          price = qty * 5.6;
          break;
        case "grapes":
          price = qty * 4.2;
          break;
        default:
          isError = true;
          console.log("error");
          break;
      }
      break;
    default:
      isError = true;
      console.log("error");
      break;
  }

  if (!isError) {
    console.log(price.toFixed(2));
  }
}

solve(["apple", "Tuesday", "2"]);
solve(["orange", "Sunday", "3"]);
solve(["kiwi", "Monday", "2.5"]);
solve(["grapes", "Saturday", "0.5"]);
solve(["tomato", "Monday", "0.5"]);
