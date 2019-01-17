function fizzbuzz(i) {
  while (i > 0 && i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    } else if (i % 3 === 0 || (i + "").indexOf("3") > -1) {
      return "Fizz";
    } else if (i % 5 === 0 || (i + "").indexOf("5") > -1) {
      return "Buzz";
    } else {
      return i;
    }
  }
  if (i < 0) {
    return "error, only numbers between 1 and 100 allowed";
  } else if (typeof i === "string") {
    return "error, only numbers allowed";
  }
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(-4));
console.log(fizzbuzz("foo"));
console.log(fizzbuzz(13), 13);
console.log(fizzbuzz(58), 51);
console.log("13".indexOf("3"));
console.log("51".indexOf("3") > -1);

module.exports.fizzbuzz = i => fizzbuzz(i);
