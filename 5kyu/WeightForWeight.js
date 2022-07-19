function orderWeight(string) {
  const numbersArray = string.split(' ').filter(i => i);
  numbersArray.sort((a, b) => {
    const weight = calculateWeight(+a) - calculateWeight(+b);
    if (weight == 0) {
      return a > b ? 1 : -1;
    }
    return weight;
  });
  
  return numbersArray.join(' ');
}

function calculateWeight(number) {
  const digitsArray = number.toString().split('');
  return digitsArray.reduce((sum, digit) => sum += +digit, 0);
}