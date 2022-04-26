function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 == 0 && flower2 % 2 != 0) ||
    (flower2 % 2 == 0 && flower1 % 2 != 0)
  ) {
    return true;
  } else {
    return false;
  }
}

lovefunc(1, 4); // true
lovefunc(2, 2); // false
lovefunc(0, 1); // true
lovefunc(0, 0); // false
lovefunc(113, 415); // false

// Alternative solution
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
