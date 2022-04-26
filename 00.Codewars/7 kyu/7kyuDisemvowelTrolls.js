function disemvowel(str) {
  return str.replace(/[aoueiAOUEI]/g, "");
}

// Alternative solution:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
