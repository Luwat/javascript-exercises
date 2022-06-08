const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(numa, numb) {
	return numa - numb;
};

const sum = function(num) {
	sumAll = num.reduce((a, b) => {
    return a + b
  }, 0);
  return sumAll;
};

const multiply = function(num) {
  multiplyAll = num.reduce((a, b) => {
    return a * b
  });
  return multiplyAll;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num < 0) {
    return -1
  } else if (num == 0 || num == 1) {
    return 1
  } else {
    let result = num * factorial(num - 1);
    return result;
  }
};


add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
sum([]);
sum([7])
sum([7, 11])
sum([1, 3, 5, 7, 9])
multiply([2, 4])
multiply([2, 4, 6, 8, 10, 12, 14])
power(4, 3)
factorial(0)
factorial(1)
factorial(2)
factorial(5)
factorial(10)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
