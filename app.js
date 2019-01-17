function fizzbuzz(i) {
  while (i > 0 && i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    } else if (i % 3 === 0) {
      return "Fizz";
    } else if (i % 5 === 0) {
      return "Buzz";
    } else {
      return i;
    }
  }
  if (i < 0) {
      return 'error, only numbers between 1 and 100 allowed';
  } else if (typeof i === 'string') {
      return 'error, only numbers allowed'
  }
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(-4));
console.log(fizzbuzz('foo'));

module.exports.fizzbuzz = i => fizzbuzz(i);
