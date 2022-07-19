function findOutlier(integers) {
  const isOutlierEven = integers
    .slice(0, 3)
    .map(num => num % 2 == 0)
    .reduce((sum, i) => sum += i) < 2;
  
  for (let i = 0; i < integers.length; i++) {
      if ((integers[i] % 2 == 0) == isOutlierEven) {
        return integers[i];
      }
  }
}