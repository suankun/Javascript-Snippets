function clock() {
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      console.log(`${h}:${m}`);
    }
  }
}

clock();

// function clock() {
//   for (let h = 0; h < 24; h++) {
//     for (let m = 0; m < 60; m++) {
//       if (m < 10) {
//         console.log(`${h}:0${m}`);
//       } else {
//         console.log(`${h}:${m}`);
//       }
//     }
//   }
// }

// clock();
