function barcodeGenerator(input) {
  const startNum = String(input[0]);
  const endNum = String(input[1]);
  let startA = Number(startNum[0]);
  let startB = Number(startNum[1]);
  let startC = Number(startNum[2]);
  let startD = Number(startNum[3]);
  let endA = Number(endNum[0]);
  let endB = Number(endNum[1]);
  let endC = Number(endNum[2]);
  let endD = Number(endNum[3]);
  let res = "";
  for (let a = startA; a <= endA; a++) {
    for (let b = startB; b <= endB; b++) {
      for (let c = startC; c <= endC; c++) {
        for (let d = startD; d <= endD; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            res += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(res);
}

barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
barcodeGenerator(["1365", "5877"]);
