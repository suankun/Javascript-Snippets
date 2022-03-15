function movieRatings(input) {
  let index = 0;
  const movieCount = Number(input[index]);
  index++;
  let maxRateName = "";
  let maxRate = 0;
  let minRateName = "";
  let minRate = 10;
  let rates = 0;

  for (let i = 0; i < movieCount; i++) {
    const tempMovieName = input[index];
    index++;
    const tempRating = Number(input[index]);
    index++;
    rates += tempRating;
    if (tempRating > maxRate) {
      maxRate = tempRating;
      maxRateName = tempMovieName;
    }

    if (tempRating < minRate) {
      minRate = tempRating;
      minRateName = tempMovieName;
    }
  }
  console.log(`${maxRateName} is with highest rating: ${maxRate.toFixed(1)}`);
  console.log(`${minRateName} is with lowest rating: ${minRate.toFixed(1)}`);
  console.log(`Average rating: ${(rates / movieCount).toFixed(1)}`);
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
