function sumTwoSmallestNumbers(numbers) {
  let smallestNum = numbers.sort((a, b) => a - b);
  return smallestNum[0] + smallestNum[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // "Sum should be 13"
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // "Sum should be 6"

// Alternative solutioon:
function sumTwoSmallestNumbers(numbers){
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
