const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
};

const multiply = function (array) {
  let product = 1;
  for (const number of array) {
    product *= number;
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0) return 1;
  let fact = 1;
  while (number) {
    fact *= number--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
