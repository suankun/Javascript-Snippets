function getAge(inputString) {
  const age = Number(inputString[0]);
  return age;
}

getAge("4 years old"); // 4;

// Alternative solution:
function getAge(inputString) {
  return parseInt(inputString);
}
