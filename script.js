function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num < 0 || num > 50) {
    return "Invalid input";
  } else {
    let prev1 = 1;
    let prev2 = 1;
    let curr = 0;
    for (let i = 3; i <= num; i++) {
      curr = prev1 + prev2;
      prev2 = prev1;
      prev1 = curr;
    }
    return curr;
  }
}
var num = 6;
var result = fibonacci(num);
console.log(result); 
module.exports = fibonacci;
