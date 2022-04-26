class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  }
}

// Alternative solution:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
