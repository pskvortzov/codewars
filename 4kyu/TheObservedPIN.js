function getPINs(observed) {
  const variants = observed
    .split('')
    .map(digit => [digit].concat(getAdjacentDigits(digit)));
  
  return variants.reduce((result, possibleDigits) => {
    return possibleDigits.reduce((all, digit) => {
      all.push(...result.reduce((tt, char) => {
        tt.push(char + digit);
        return tt;
      }, []));
      return all;
    }, []);
  }, ['']);
}

function getAdjacentDigits(digit) {
  const adjacentDigits = {
    1: ['2', '4'],
    2: ['1', '3', '5'],
    3: ['2', '6'],
    4: ['1', '5', '7'],
    5: ['2', '4', '6', '8'],
    6: ['3', '5', '9'],
    7: ['4', '8'],
    8: ['5', '7', '9', '0'],
    9: ['6', '8'],
    0: ['8']
  };
  
  return adjacentDigits[digit];
}