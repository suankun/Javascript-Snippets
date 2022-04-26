function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

// Alternative solution:
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
