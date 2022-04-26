function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i]) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

swap("HelloWorld"); // 'hELLOwORLD'
swap("CodeWars"); // 'cODEwARS'

// Alternative solution:
function swapCase(x) {
  return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
}

function swap(str) {
  return str.split("").map(swapCase).join("");
}
