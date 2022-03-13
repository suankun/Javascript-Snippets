function moving(input) {
  const w = Number(input[0]);
  const l = Number(input[1]);
  const h = Number(input[2]);
  let freeSpace = w * l * h;
  let index = 3;
  let command = input[index];
  index++;
  while (command !== "Done") {
    let boxesMoved = Number(command);
    freeSpace -= boxesMoved;
    if (freeSpace < 0) {
      break;
    }
    command = input[index];
    index++;
  }
  if (freeSpace <= 0) {
    console.log(
      `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
    );
  } else {
    console.log(`${freeSpace} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
