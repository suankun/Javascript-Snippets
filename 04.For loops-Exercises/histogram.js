function histogram(input) {
  const n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1++;
    } else if (num >= 200 && num < 400) {
      p2++;
    } else if (num >= 400 && num < 600) {
      p3++;
    } else if (num >= 600 && num < 800) {
      p4++;
    } else if (num >= 800) {
      p5++;
    }
  }
  console.log(`${((p1 / n) * 100).toFixed(2)}%`);
  console.log(`${((p2 / n) * 100).toFixed(2)}%`);
  console.log(`${((p3 / n) * 100).toFixed(2)}%`);
  console.log(`${((p4 / n) * 100).toFixed(2)}%`);
  console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
