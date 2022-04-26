function remove(string) {
  let newStr = string.replace(/!/g, "");
  newStr += "!";
  return newStr;
}

remove("Hi!"); // "Hi!"
remove("Hi!!!"); // "Hi!"
remove("Hi! Hi!"); // "Hi Hi!"

// Alternative solution 1:
const remove = (s) => s.replace(/!+/g, "") + "!";

// Alternative solution 2:
function remove(s) {
  return s.replace(/!+/g, "") + "!";
}
