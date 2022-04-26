function cockroachSpeed(s) {
  return Math.floor(s * (100000 / 3600));
}

// Alternative solution:
const cockroachSpeed = (s) => Math.floor(s / 0.036);
