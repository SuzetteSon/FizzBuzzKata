const app = require("./app");

test("3 prints Fizz", () => {
  expect(app.fizzbuzz(3)).toBe("Fizz");
});

test("5 prints Buzz", () => {
  expect(app.fizzbuzz(5)).toBe("Buzz");
});

test("15 prints FizzBuzz", () => {
  expect(app.fizzbuzz(15)).toBe("FizzBuzz");
});

test("-10 to throw error", () => {
  expect(app.fizzbuzz(-10)).toBe(
    "error, only numbers between 1 and 100 allowed"
  );
});

test("'foo' to throw error", () => {
  expect(app.fizzbuzz("foo")).toBe("error, only numbers allowed");
});

test("13 prints Fizz", () => {
  expect(app.fizzbuzz(13)).toBe("Fizz");
});

test("51 prints Buzz", () => {
  expect(app.fizzbuzz(58)).toBe("Buzz");
});
