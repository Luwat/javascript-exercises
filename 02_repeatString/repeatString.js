const repeatString = function(string, num) {
    let myString = '';
    if (num < 0) {
        myString = 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        myString += string;
    }
    return myString;
};

const number = Math.floor(Math.random() * 1000);

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', 3);
repeatString('hey', -1);
repeatString('hey', number);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
