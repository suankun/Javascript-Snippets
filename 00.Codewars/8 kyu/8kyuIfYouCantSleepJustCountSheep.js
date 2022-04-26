function countSheep(num) {
  let arr = [];
  if (num !== 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(`${i} sheep...`);
    }
  } else {
    return "";
  }

  let res = arr.join("");
  return res;
}

// Alternative solution:
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
