function solve(input) {
  const item = input[0];

  switch (item) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
      break;
  }
}

solve(["banana"]);
solve(["apple"]);
solve(["tomato"]);
solve(["water"]);

10. Invalid Number
function solve(input) {
  const num = Number(input[0]);

  if ((num >= 100 && num <= 200) || num == 0) {
  } else {
    console.log("invalid");
  }
}

solve(["75"]);
solve(["150"]);
solve(["220"]);
solve(["199"]);
solve(["-1"]);
solve(["100"]);
solve(["200"]);
solve(["0"]);
