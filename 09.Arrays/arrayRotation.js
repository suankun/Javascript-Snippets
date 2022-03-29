function arrayRotation(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    let tempNum = array.shift();
    array.push(tempNum);
  }
  console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2); // 32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4); // 32 21 61 1
arrayRotation([2, 4, 15, 31], 5); // 4 15 31 2
