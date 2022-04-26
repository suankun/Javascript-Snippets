function remove(string) {
  let lc = string.charAt(string.length - 1);

  let cutStr = "";
  if (lc == "!") {
    cutStr = string.substring(0, string.length - 1);
  } else {
    cutStr = string;
  }

  return cutStr;
}

// Alternative solution 1:
const remove = (s) => s.replace(/!$/, "");

// Alternative solution 2:
function remove(s) {
  return s.replace(/!$/, "");
}
