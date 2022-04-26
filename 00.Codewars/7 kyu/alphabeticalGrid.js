function grid(N) {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let totalRes = "";
  if (N < 0) {
    return null;
  } else if (N == "") {
    let emptyRes = "";
    return emptyRes;
  } else {
    for (let i = 0; i < N; i++) {
      let res = "";
      for (let j = i; j < i + N; j++) {
        if (j == i + N - 1) {
          res += `${alphabet[j]}`;
        } else {
          res += `${alphabet[j]} `;
        }
      }
      totalRes += `${res}\n`;
    }
  }
  return totalRes.trim();
}

grid(0); // ''
grid(1); // 'a'
grid(2); // 'a b\nb c'
grid(4); // 'a b c d\nb c d e\nc d e f\nd e f g'
grid(6); // 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k'

// Alternative solution:
function grid($) {
  const abc = "abcdefghijklmnopqrstuvwxyz".repeat(8);
  return $ < 0
    ? null
    : Array.from({ length: $ }, (_, i) => [...abc.substr(i, $)].join(" ")).join(
        "\n"
      );
}

console.log(grid(2));

// Alternative solution 2:
const grid = (n) =>
  n < 0
    ? null
    : Array.from({ length: n }, (x, i) =>
        "abcdefghijklmnopqrstuvwxyz"
          .repeat(n)
          .split("")
          .slice(i, i + n)
          .join(" ")
      ).join("\n");
