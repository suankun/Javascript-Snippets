function coins(input) {
  let change = Number(input[0]);
  let changeInStotinki = parseInt(change * 100);
  let returnedCoins = 0;
  while (changeInStotinki !== 0) {
    if (changeInStotinki >= 200) {
      changeInStotinki -= 200;
      returnedCoins++;
    } else if (changeInStotinki >= 100) {
      changeInStotinki -= 100;
      returnedCoins++;
    } else if (changeInStotinki >= 50) {
      changeInStotinki -= 50;
      returnedCoins++;
    } else if (changeInStotinki >= 20) {
      changeInStotinki -= 20;
      returnedCoins++;
    } else if (changeInStotinki >= 10) {
      changeInStotinki -= 10;
      returnedCoins++;
    } else if (changeInStotinki >= 5) {
      changeInStotinki -= 5;
      returnedCoins++;
    } else if (changeInStotinki >= 2) {
      changeInStotinki -= 2;
      returnedCoins++;
    } else if (changeInStotinki >= 1) {
      changeInStotinki -= 1;
      returnedCoins++;
    }
  }
  console.log(returnedCoins);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
