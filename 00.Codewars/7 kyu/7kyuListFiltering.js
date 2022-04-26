function filter_list(l) {
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === "string") {
      l.splice(i, 1);
      i--;
    }
  }
  return l;
}

// Alternative solution:
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}
