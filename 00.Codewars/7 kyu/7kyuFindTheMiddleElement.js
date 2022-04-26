function gimme(triplet) {
  const num1 = triplet[0];
  const num2 = triplet[1];
  const num3 = triplet[2];

  if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    return 0;
  } else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
    return 1;
  } else if ((num3 > num1 && num3 < num2) || (num3 > num2 && num3 < num1)) {
    return 2;
  }
}

// Alternative solution
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}
