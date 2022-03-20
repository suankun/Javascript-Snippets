function solve(input) {
  const rent = Number(input[0]);
  const birthdayCake = rent * 0.2;
  const beverage = birthdayCake * 0.55;
  const animator = rent / 3;

  const budget = rent + birthdayCake + beverage + animator;

  console.log(budget);
}

solve(["2250"]);
