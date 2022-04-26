function longest(s1, s2) {
  let chars = {};
  let rv = "";

  for (let i = 0; i < s1.length; ++i) {
    if (!(s1[i] in chars)) {
      chars[s1[i]] = 1;
      rv += s1[i];
    }
  }

  for (let i = 0; i < s2.length; ++i) {
    if (!(s2[i] in chars)) {
      chars[s2[i]] = 1;
      rv += s2[i];
    }
  }

  let res = rv.split("").sort().join("");

  return res;
}

longest("aretheyhere", "yestheyarehere"); // "aehrsty"

// Alternative solution 1:
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// Alternative solution 2:
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
