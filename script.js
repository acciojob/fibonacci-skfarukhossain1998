function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
   if (num === 1 || num === 2 ) {
    return 1;
  }

  var prev = 0;
  var current = 1;

  for (var i = 3; i <= num; i++) {
    var next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}
/* var num = 5;
var result = fibonacci(num);
console.log(result);  */



module.exports = fibonacci;
