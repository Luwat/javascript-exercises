const palindromes = function (string) {
    const reg = /[\W_]/g;
    let regLow = string.toLowerCase().replace(reg, '');
    let regLowReverse = regLow.split('').reverse().join('');
    return regLow === regLowReverse;

};

palindromes('racecar')
palindromes('racecar!')
palindromes('Racecar!')
palindromes('Racecar!')
palindromes('A car, a man, a maraca.')
palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
