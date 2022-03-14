function solve(input) {
  const city = input[0];
  const sells = Number(input[1]);
  let bonus = 0;
  let flag = false;

  switch (city) {
    case "Sofia":
      if (sells >= 0 && sells <= 500) {
        bonus = sells * 0.05;
      } else if (sells > 500 && sells <= 1000) {
        bonus = sells * 0.07;
      } else if (sells > 1000 && sells <= 10000) {
        bonus = sells * 0.08;
      } else if (sells > 10000) {
        bonus = sells * 0.12;
      } else {
        flag = true;
        console.log("error");
      }
      break;
    case "Varna":
      if (sells >= 0 && sells <= 500) {
        bonus = sells * 0.045;
      } else if (sells > 500 && sells <= 1000) {
        bonus = sells * 0.075;
      } else if (sells > 1000 && sells <= 10000) {
        bonus = sells * 0.1;
      } else if (sells > 10000) {
        bonus = sells * 0.13;
      } else {
        flag = true;
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (sells >= 0 && sells <= 500) {
        bonus = sells * 0.055;
      } else if (sells > 500 && sells <= 1000) {
        bonus = sells * 0.08;
      } else if (sells > 1000 && sells <= 10000) {
        bonus = sells * 0.12;
      } else if (sells > 10000) {
        bonus = sells * 0.145;
      } else {
        flag = true;
        console.log("error");
      }
      break;
    default:
      flag = true;
      console.log("error");
      break;
  }

  if (!flag) {
    console.log(bonus.toFixed(2));
  }
}

solve(["Sofia", "1500"]);
solve(["Plovdiv", "499.99"]);
solve(["Varna", "3874.50"]);
solve(["Kaspichan", "-50"]);
