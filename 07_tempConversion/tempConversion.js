const ftoc = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
};

const ctof = function(celcius) {
  return Math.round((celcius * 9/5 + 32) * 10) / 10;
};

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
