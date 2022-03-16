function equalSumsEvenOddPosition(input) {
  const startNum = Number(input[0]);
  const endNum = Number(input[1]);
  let res = "";
  for (let i = startNum; i <= endNum; i++) {
    curNum = String(i);
    evenSum = 0;
    oddSum = 0;
    for (let j = 0; j < curNum.length; j++) {
      let curDigit = Number(curNum.charAt(j));
      if (j % 2 === 0) {
        evenSum += curDigit;
      } else {
        oddSum += curDigit;
      }
    }
    if (evenSum === oddSum) {
      res += `${curNum} `;
    }
  }
  console.log(res);
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);

// function equalSumsEvenOddPosition(input) {
//     const startNum = Number(input[0]);
//     const endNum = Number(input[1]);
//     let res = "";
//     for (let i = startNum; i <= endNum; i++) {
//       let numStr = String(i);
//       if (
//         Number(numStr.charAt(0)) +
//           Number(numStr.charAt(2)) +
//           Number(numStr.charAt(4)) ===
//         Number(numStr.charAt(1)) +
//           Number(numStr.charAt(3)) +
//           Number(numStr.charAt(5))
//       ) {
//         res += `${numStr} `;
//       }
//     }
//     console.log(res);
//   }

//   equalSumsEvenOddPosition(["100000", "100050"]);
