"use strict";
// 0 1 1 2 3 5 8 13 21 ....
// find fibonacci series range of a given length
var findFibonacciSeriesOfLength = function (length) {
    if (length < 0) {
        console.log("upper limit must be 0 or higher");
        return;
    }
    var iterationCount = 0;
    var getSeries = function (numOne, numTow) {
        if (numOne === void 0) { numOne = 0; }
        if (numTow === void 0) { numTow = 1; }
        if (numOne === 0 && numTow === 1) {
            console.log(numOne);
            console.log(numTow);
            iterationCount += 2;
        }
        var sum = numOne + numTow;
        console.log(sum);
        iterationCount++;
        if (iterationCount === length)
            return;
        else
            getSeries(numTow, sum);
    };
    getSeries();
};
findFibonacciSeriesOfLength(10);
// find n-th element of fibonacci series
var findNthFibonacci = function (n) {
    if (n < 0)
        return 0;
    else if (n === 1 || n === 2)
        return n - 1;
    else
        return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
};
console.log("\nn-th element of fibonacci series\n");
console.log(findNthFibonacci(10));
