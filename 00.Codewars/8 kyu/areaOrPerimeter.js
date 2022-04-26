const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
};

// Alternative solution:
// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };
