function solve(input) {
  const yearlySubs = Number(input[0]);

  const shoes = yearlySubs * 0.6;
  const suit = shoes * 0.8;
  const ball = suit / 4;
  const accs = ball / 5;

  const total = yearlySubs + shoes + suit + ball + accs;

  console.log(total.toFixed(2));
}

solve(["320"]);
