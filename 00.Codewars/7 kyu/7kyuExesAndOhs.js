function XO(str) {
  const countX = (str.toLowerCase().match(/x/g) || []).length;
  const countO = (str.toLowerCase().match(/o/g) || []).length;

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

// Alternative solution:
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
