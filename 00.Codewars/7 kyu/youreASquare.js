var isSquare = function(n){
    if (Math.sqrt(n) % 1 === 0) {
     return true;
   } else {
     return false;
   }
 }

// Alternative solution 1:
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Alternative solution 2:
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }
