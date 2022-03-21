function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let pyramidHeight = 0;

  for (let i = base; i >= 1; i -= 2) {
    pyramidHeight++;
    if (i > 2) {
      if (pyramidHeight % 5 == 0) {
        lapisLazuli += (i - 1) * 4;
      } else {
        marble += (i - 1) * 4;
      }
      stone += Math.pow(i - 2, 2);
    } else {
      gold = Math.pow(i, 2);
    }
  }
  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);

// while (base >= 1) {
//     pyramidHeight += increment;
//     if (base > 2) {
//       if (pyramidHeight % 5 == 0) {
//         lapisLazuli += (base - 1) * 4;
//       } else {
//         marble += (base - 1) * 4;
//       }
//       stone += Math.pow(base - 2, 2);
//     } else {
//       gold = Math.pow(base, 2);
//     }
//     base -= 2;
//   }
