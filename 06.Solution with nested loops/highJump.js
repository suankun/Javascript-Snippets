function highJump(input) {
  let index = 0;
  const desiredHeight = Number(input[index]);
  index++;
  let jumpBar = desiredHeight - 30;
  let totalJumpsCounter = 0;
  while (desiredHeight >= jumpBar) {
    let isSucceed = false;
    for (let i = 0; i < 3; i++) {
      totalJumpsCounter++;
      let jumpTry = Number(input[index]);
      index++;
      if (jumpTry > jumpBar) {
        isSucceed = true;
        jumpBar += 5;
        break;
      }
    }
    if (!isSucceed) {
      console.log(
        `Tihomir failed at ${jumpBar}cm after ${totalJumpsCounter} jumps.`
      );
      break;
    }
  }
  if (desiredHeight < jumpBar) {
    console.log(
      `Tihomir succeeded, he jumped over ${desiredHeight}cm after ${totalJumpsCounter} jumps.`
    );
  }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);

// function highJump(input) {
//     let index = 0;
//     const desiredHeight = Number(input[index]);
//     index++;
//     let jumpBar = desiredHeight - 30;
//     let unsuccessfulJumpsCounter = 0;
//     let totalJumpsCounter = 0;
//     let jumpTry = Number(input[index]);
//     index++;
//     while (desiredHeight >= jumpBar) {
//       if (jumpTry > jumpBar) {
//         totalJumpsCounter++;
//         jumpBar += 5;
//         unsuccessfulJumpsCounter = 0;
//       } else {
//         totalJumpsCounter++;
//         unsuccessfulJumpsCounter++;
//       }
//       if (unsuccessfulJumpsCounter == 3) {
//         console.log(
//           `Tihomir failed at ${jumpBar}cm after ${totalJumpsCounter} jumps.`
//         );
//         break;
//       }
//       jumpTry = Number(input[index]);
//       index++;
//     }
//     if (unsuccessfulJumpsCounter !== 3) {
//       console.log(
//         `Tihomir succeeded, he jumped over ${desiredHeight}cm after ${totalJumpsCounter} jumps.`
//       );
//     }
//   }
