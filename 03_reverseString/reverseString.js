const reverseString = function(word) {
    toLetters = word.split('');
    reversedWord = toLetters.reverse().join('');
    return reversedWord;
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
