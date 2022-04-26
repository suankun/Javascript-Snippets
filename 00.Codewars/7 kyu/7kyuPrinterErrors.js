function printerError(s) {
  const regex = /[n-z]/g;
  const found = s.match(regex);

  if (found !== null && found.length !== 0) {
    return `${found.length}/${s.length}`;
  } else {
    return `0/${s.length}`;
  }
}

// Alternative solution:
function printerError(s) {
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}
