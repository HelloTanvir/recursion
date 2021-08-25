// 0 1 1 2 3 5 8 13 21 ....

// find fibonacci series range of a given length
const findFibonacciSeriesOfLength = (length: number): void => {
  if (length < 0) {
    console.log("upper limit must be 0 or higher");
    return;
  }

  let iterationCount = 0;

  const getSeries = (numOne: number = 0, numTow: number = 1): void => {
    if (numOne === 0 && numTow === 1) {
      console.log(numOne);
      console.log(numTow);
      iterationCount += 2;
    }

    let sum = numOne + numTow;

    console.log(sum);
    iterationCount++;

    if (iterationCount === length) return;
    else getSeries(numTow, sum);
  };

  getSeries();
};

findFibonacciSeriesOfLength(10);

// find n-th element of fibonacci series
const findNthFibonacci = (n: number): number => {
  if (n < 0) return 0;
  else if (n === 1 || n === 2) return n - 1;
  else return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
};

console.log("\nn-th element of fibonacci series\n");

console.log(findNthFibonacci(10));
