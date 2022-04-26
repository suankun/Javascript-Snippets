function capitalize(s) {
    let string = s;
    let stringReverse = s;

    string = string.split("");

    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        string[i] = string[i].toUpperCase();
      } else {
        string[i] = string[i].toLowerCase();
      }
    }

    string = string.join("");

    stringReverse = stringReverse.split("");

    for (let i = 0; i < stringReverse.length; i++) {
      if (i % 2 === 1) {
        stringReverse[i] = stringReverse[i].toUpperCase();
      } else {
        stringReverse[i] = stringReverse[i].toLowerCase();
      }
    }

    stringReverse = stringReverse.join("");

    const array = [string, stringReverse];

    return array;
  }

// Alternative decision:
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
