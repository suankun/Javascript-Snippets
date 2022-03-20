function solve(input) {
  const firMatchRes = input[0];
  const secMatchRes = input[1];
  const thrMatchRes = input[2];

  let won = 0;
  let lost = 0;
  let drawn = 0;

  if (firMatchRes[0] > firMatchRes[2]) {
    won += 1;
  } else if (firMatchRes[0] < firMatchRes[2]) {
    lost += 1;
  } else if (firMatchRes[0] == firMatchRes[2]) {
    drawn += 1;
  }

  if (secMatchRes[0] > secMatchRes[2]) {
    won += 1;
  } else if (secMatchRes[0] < secMatchRes[2]) {
    lost += 1;
  } else if (secMatchRes[0] == secMatchRes[2]) {
    drawn += 1;
  }

  if (thrMatchRes[0] > thrMatchRes[2]) {
    won += 1;
  } else if (thrMatchRes[0] < thrMatchRes[2]) {
    lost += 1;
  } else if (thrMatchRes[0] == thrMatchRes[2]) {
    drawn += 1;
  }

  console.log(`Team won ${won} games.`);
  console.log(`Team lost ${lost} games.`);
  console.log(`Drawn games: ${drawn}`);
}

solve(["3:1", "0:2", "0:0"]);
solve(["4:2", "0:3", "1:0"]);
solve(["0:2", "0:1", "3:3"]);
