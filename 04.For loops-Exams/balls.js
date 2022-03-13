function solve(input) {
  let index = 0;
  const numberOfBalls = Number(input[index]);
  index++;
  let counter = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let noColor = 0;
  let blackBalls = 0;

  for (let i = 1; i <= numberOfBalls; i++) {
    let ballColor = input[index];
    switch (ballColor) {
      case "red":
        counter += 5;
        redBalls++;
        break;
      case "orange":
        counter += 10;
        orangeBalls++;
        break;
      case "yellow":
        counter += 15;
        yellowBalls++;
        break;
      case "white":
        counter += 20;
        whiteBalls++;
        break;
      case "black":
        counter = Math.floor(counter / 2);
        blackBalls++;
        break;
      default:
        noColor++;
        break;
    }
    index++;
  }
  console.log(`Total points: ${counter}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${noColor}`);
  console.log(`Divides from black balls: ${blackBalls}`);
}

balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
