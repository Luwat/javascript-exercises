const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num === 0) return 0;
    if (num === 1 || num === "1") return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
