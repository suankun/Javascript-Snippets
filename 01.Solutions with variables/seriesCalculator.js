function solve(input) {
  const name = input[0];
  const seasons = Number(input[1]);
  const episodes = Number(input[2]);
  const timeLength = Number(input[3]);

  const ads = timeLength * 0.2;
  const timeLengthWithAds = timeLength + ads;
  const addTimeForSpecialEpisodes = seasons * 10;

  const totalTime =
    timeLengthWithAds * episodes * seasons + addTimeForSpecialEpisodes;

  console.log(
    `Total time needed to watch the ${name} series is ${Math.floor(
      totalTime
    )} minutes.`
  );
}

solve(["Lucifer", "3", "18", "55"]);
solve(["Game of Thrones", "7", "10", "50"]);
