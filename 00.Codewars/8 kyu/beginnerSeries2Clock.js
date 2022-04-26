function past(h, m, s) {
  const res = (h * 60 * 60 + m * 60 + s) * 1000;

  return res;
}

// Alternative solution:
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
