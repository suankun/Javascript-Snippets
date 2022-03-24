function primeNumberChecker(num) {
  let isFound = false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(false);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(true);
  }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
