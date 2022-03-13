function cleverLily(input) {
  const lilisAge = Number(input[0]);
  const priceWashingMachine = Number(input[1]);
  const priceForOneToy = Number(input[2]);
  let tempMoney = 10;
  let toys = 0;
  let money = 0;
  for (let i = 1; i <= lilisAge; i++) {
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      toys++;
    }
  }
  money += toys * priceForOneToy;
  let diff = Math.abs(priceWashingMachine - money);
  if (money >= priceWashingMachine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);
