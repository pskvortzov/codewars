function narcissistic(value) {
  const digitsArray = [...String(value)];
  return value == digitsArray.reduce((sum, digit) => sum + Math.pow(digit, digitsArray.length), 0);
}