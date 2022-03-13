function cake(input) {
  let index = 0;
  const w = Number(input[index]);
  index++;
  const h = Number(input[index]);
  index++;
  let cake = w * h;
  let command = input[index];
  index++;
  while (command !== "STOP") {
    let pcsTaken = Number(command);
    cake -= pcsTaken;
    if (cake < 0) {
      console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
      break;
    }
    command = input[index];
    index++;
  }
  if (cake >= 0) {
    console.log(`${cake} pieces are left.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);

// function solve(input) {
//     let l = Number(input[0]);
//     let w = Number(input[1]);
//     let cake = l * w;
//     let total = 0;
//     let index = 2;
//     while (cake >= total) {
//       let command = input[index];
//       index++;

//       if (command == "STOP") {
//         break;
//       }
//       let piece = Number(command);
//       total += piece;
//     }

//     if (total > cake) {
//       let need = total - cake;
//       console.log(`No more cake left! You need ${need} pieces more.`);
//     } else {
//       let left = cake - total;
//       console.log(`${left} pieces are left.`);
//     }
//   }
