function requiredReading(pagesNumber, readPagesForHour, daysNumber) {
  const totalTime = pagesNumber / readPagesForHour;
  const reqHours = totalTime / daysNumber;
  console.log(reqHours);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
