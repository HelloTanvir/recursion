"use strict";
var findFactiorial = function (n) {
    if (n === 1) {
        return n;
    }
    else {
        return n * findFactiorial(n - 1);
    }
};
var factiorialOfFive = findFactiorial(5);
console.log(factiorialOfFive);
