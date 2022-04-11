const leapYears = function(year) {
    let leap = true;
    let notLeap = false;

    if (year%400 === 0) {
        return leap;
    } else if (year%4 === 0 && !(year%100 === 0)) {
        return leap;
    } else {
        return notLeap
    }
    
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
