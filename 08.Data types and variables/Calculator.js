function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      res = num1 + num2;
      console.log(res.toFixed(2));
      break;
    case "-":
      res = num1 - num2;
      console.log(res.toFixed(2));
      break;
    case "*":
      res = num1 * num2;
      console.log(res.toFixed(2));
      break;
    case "/":
      res = num1 / num2;
      console.log(res.toFixed(2));
      break;
  }
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
