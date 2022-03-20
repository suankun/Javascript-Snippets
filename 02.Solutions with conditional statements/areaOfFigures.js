function solve(input) {
  const figure = input[0];
  if (figure === "square") {
    const num = input[1];
    console.log((num * num).toFixed(3));
  } else if (figure === "rectangle") {
    const num1 = input[1];
    const num2 = input[2];
    console.log((num1 * num2).toFixed(3));
  } else if (figure === "circle") {
    const num1 = input[1];
    console.log((Math.PI * (num1 * num1)).toFixed(3));
  } else if (figure === "triangle") {
    const num1 = input[1];
    const num2 = input[2];
    console.log(((num2 * num1) / 2).toFixed(3));
  }
}

solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
