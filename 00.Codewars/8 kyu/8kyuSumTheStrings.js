function sumStr(a,b) {
    const firNum = Number(a);
    const secNum = Number(b);
    const res = firNum + secNum;
    return String(res);
}
sumStr("4","5"); // "9"
sumStr("34","5"); // "39"

// Alternative solution:
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }
