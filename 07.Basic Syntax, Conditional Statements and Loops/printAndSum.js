function printAndSum(startNum, endNum) {
  let sum = 0;
  let str = "";
  for (let i = startNum; i <= endNum; i++) {
    str += `${i} `;
    sum += i;
  }
  console.log(str);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
