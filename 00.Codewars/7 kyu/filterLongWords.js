function filterLongWords(sentence, n) {
  let arr = [];
  let wordCheck = sentence.split(" ");
  for (let i = 0; i < wordCheck.length; i++) {
    if (wordCheck[i].length > n) {
      arr.push(wordCheck[i]);
    }
  }
  return arr;
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4); // ['quick', 'brown', 'jumps']

// Examples:
// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// Alternative solution:
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((x) => x.length > n);
}
