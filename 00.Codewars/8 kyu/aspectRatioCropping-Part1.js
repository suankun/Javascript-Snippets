function aspectRatio(x, y) {
  let ratio = Math.ceil((y / 9) * 16);
  let aspRatio = new Array(ratio, y);
  return aspRatio;
}

aspectRatio(640, 480); // [854, 480]
aspectRatio(960, 720); // [1280, 720]

// Alternative solution:
function aspectRatio(x,y){
  return [Math.ceil(y*16/9), y];
  }
