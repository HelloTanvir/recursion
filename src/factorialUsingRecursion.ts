const findFactiorial = (n: number): number => {
  if (n === 1) {
    return n;
  } else {
    return n * findFactiorial(n - 1);
  }
};

const factiorialOfFive = findFactiorial(5);

console.log(factiorialOfFive);
