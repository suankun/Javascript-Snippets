function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  sum % 1 == 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);

// function integerAndFloat(a, b, c) {
//   let sum = a + b + c;
//   let sumAsString = String(sum);
//   let type = "Integer";
//   for (let i = 0; i < sumAsString.length; i++) {
//     if (sumAsString[i] == ".") {
//       type = "Float";
//     }
//   }
//   console.log(`${sum} - ${type}`);
// }
