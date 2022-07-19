function nextBigger(n) {
  let numberString = n.toString();

  for (let i = 1; i <= numberString.length; i++) {
    const ending = numberString.substr(-i);
    const sorted = ending.split('').sort().reverse();
    
    if (sorted.join('') !== ending) {
      let indexOfNewFirstDigit = sorted.indexOf(ending[0]) - 1;
      let newFirstDigit = sorted.splice(indexOfNewFirstDigit, 1);
      
      return parseInt(numberString.slice(0, -i) + newFirstDigit + sorted.sort().join(''));
    }
  }
  
  return -1;
}