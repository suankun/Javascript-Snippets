function rentalCarCost(d) {
    const rentDay = 40;
    let rentTotal = 0;
    if (d <= 2) {
      rentTotal = d * rentDay;
    } else if (d >= 3 && d <= 6) {
      rentTotal = d * rentDay - 20;
    } else if (d >= 7) {
      rentTotal = d * rentDay - 50;
    }
    return rentTotal;
  }
  
// Alternative solution:
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }
