const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const cons = fuelLeft * mpg;
  if (cons >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

// Alternative solution:
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };
