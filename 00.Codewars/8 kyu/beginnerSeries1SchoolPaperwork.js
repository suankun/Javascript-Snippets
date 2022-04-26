function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  } else if (n <= 0 || m <= 0) {
    return 0;
  }
}

// Alternative solution:
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
