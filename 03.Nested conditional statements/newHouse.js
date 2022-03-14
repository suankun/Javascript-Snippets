function solve(input) {
  const type = input[0];
  const pcs = Number(input[1]);
  const budget = Number(input[2]);

  let res = 0;

  switch (type) {
    case "Roses":
      if (pcs > 80) {
        res = pcs * 5;
        res = res - res * 0.1;
      } else {
        res = pcs * 5;
      }
      break;
    case "Dahlias":
      if (pcs > 90) {
        res = pcs * 3.8;
        res = res - res * 0.15;
      } else {
        res = pcs * 3.8;
      }
      break;
    case "Tulips":
      if (pcs > 80) {
        res = pcs * 2.8;
        res = res - res * 0.15;
      } else {
        res = pcs * 2.8;
      }
      break;
    case "Narcissus":
      if (pcs < 120) {
        res = pcs * 3;
        res = res + res * 0.15;
      } else {
        res = pcs * 3;
      }
      break;
    case "Gladiolus":
      if (pcs < 80) {
        res = pcs * 2.5;
        res = res + res * 0.2;
      } else {
        res = pcs * 2.5;
      }
      break;
  }

  if (budget >= res) {
    console.log(
      `Hey, you have a great garden with ${pcs} ${type} and ${(
        budget - res
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(res - budget).toFixed(2)} leva more.`
    );
  }
}

solve(["Roses", "55", "250"]);
solve(["Tulips", "88", "260"]);
solve(["Narcissus", "119", "360"]);
