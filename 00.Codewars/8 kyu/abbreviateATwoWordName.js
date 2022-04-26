function abbrevName(name) {
  const firstLetters = name
    .split(" ")
    .map((word) => word[0])
    .join(".")
    .toUpperCase();

  return firstLetters;
}

// Alternative solution:
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
