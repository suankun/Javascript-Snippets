function doubleOrNothing(cash, wager, losses) {
  let moneyLeft = cash;
  let step = wager;
  for (let i = 1; i <= losses; i++) {
    moneyLeft -= step;
    if (i == 1) {
      step = wager;
    } else {
      step *= 2;
    }
    if (moneyLeft < 0) {
      return "I'll pay you back later";
    }
  }
  if (moneyLeft >= 0) {
    return moneyLeft;
  }
}

console.log(doubleOrNothing(11, 2, 3)); // 3
console.log(doubleOrNothing(50, 5, 3)); // 30
console.log(doubleOrNothing(66, 1, 7)); // 2
console.log(doubleOrNothing(10, 2, 4)); // "I'll pay you back later"

// Alternative solution:
function doubleOrNothing(cash, wager, losses) {
  for (i = 1; i < losses; i++) {
    wager = wager * 2;
  }

  if (wager > cash) {
    return "I'll pay you back later";
  } else {
    return cash - wager;
  }
}
