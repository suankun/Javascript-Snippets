function solve(input) {
  const num = Number(input[0]);
  let bounusPoints = 0;

  if (num <= 100) {
    bounusPoints = 5;
  } else if (num > 100 && num < 1000) {
    bounusPoints = num * 0.2;
  } else if (num >= 1000) {
    bounusPoints = num * 0.1;
  }

  if (num % 2 === 0) {
    bounusPoints += 1;
  } else if (num % 10 === 5) {
    bounusPoints += 2;
  }

  console.log(bounusPoints);
  console.log(bounusPoints + num);
}

solve(["20"]);
solve(["175"]);
solve(["2703"]);
solve(["15875"]);
