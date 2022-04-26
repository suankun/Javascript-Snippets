function points(games) {
  let matchResult = Array.from(games[0]);
  let points = 0;

  for (let i = 0; i < 10; i++) {
    matchResult = Array.from(games[i]);
    matchResult[0] = Number(matchResult[0]);
    matchResult[2] = Number(matchResult[2]);

    if (matchResult[0] > matchResult[2]) {
      points += 3;
    } else if (matchResult[0] === matchResult[2]) {
      points += 1;
    }
  }
  return points;
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]); // 30
points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]); // 12

// Alternative solution:
const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }
