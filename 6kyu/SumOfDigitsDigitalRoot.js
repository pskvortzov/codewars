function digital_root(n) {
  if (n < 10) {
    return n;
  }
  
  const sum = String(n).split('').reduce((total, digit) => total + +digit, 0);
  return digital_root(sum);
}