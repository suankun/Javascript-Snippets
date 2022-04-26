function findNeedle(haystack) {
    const check = haystack.indexOf("needle");
    return `found the needle at position ${check}`;
  }

// Alternative solution:
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
