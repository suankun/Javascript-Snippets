function gymnastics(input) {
  const country = input[0];
  const instrument = input[1];
  let totalAss = 0;
  switch (country) {
    case "Russia":
      switch (instrument) {
        case "ribbon":
          totalAss = 9.1 + 9.4;
          break;
        case "hoop":
          totalAss = 9.3 + 9.8;
          break;
        case "rope":
          totalAss = 9.6 + 9.0;
          break;
      }
      break;
    case "Bulgaria":
      switch (instrument) {
        case "ribbon":
          totalAss = 9.6 + 9.4;
          break;
        case "hoop":
          totalAss = 9.55 + 9.75;
          break;
        case "rope":
          totalAss = 9.5 + 9.4;
          break;
      }
      break;
    case "Italy":
      switch (instrument) {
        case "ribbon":
          totalAss = 9.2 + 9.5;
          break;
        case "hoop":
          totalAss = 9.45 + 9.35;
          break;
        case "rope":
          totalAss = 9.7 + 9.15;
          break;
      }
      break;
  }
  const percent = (Math.abs(totalAss - 20) / 20) * 100;
  console.log(
    `The team of ${country} get ${totalAss.toFixed(3)} on ${instrument}.`
  );
  console.log(`${percent.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);
