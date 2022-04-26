function well(x) {
    let arr = x;
    let countGood = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] == "good") {
        countGood++;
      }
    }

    if (countGood >= 1 && countGood <= 2) {
      return "Publish!";
    } else if (countGood > 2) {
      return "I smell a series!";
    } else {
      return "Fail!";
    }
  }

// Alternative solution:
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }
