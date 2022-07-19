function isInteresting(number, awesomePhrases) {
  if (checkNumber(number, awesomePhrases)) {
    return 2;
  }
  
  if (checkNumber(number + 1, awesomePhrases) ||
      checkNumber(number + 2, awesomePhrases)) {
    return 1;
  }
  
  return 0;
}

function checkNumber(number, awesomePhrases) {
  return /^[0-9]0{2,}$/.test(number) || 
        /^([0-9])\1{2,}$/.test(number) ||
        constructAscending(number) === number ||
        constructDescending(number) === number ||
        constructPalindrome(number) === number ||
        awesomePhrases.includes(number);
}

function constructAscending(number) {
  if (number < 100) {
    return false;
  }
  
  const string = String(number);
  const startDigit = parseInt(string[0]);
  
  const sequence = [...new Array(startDigit + string.length).keys()]
    .slice(startDigit)
    .reduce((total, digit) => {
      digit = digit >= 10 ? digit %= 10 : digit;
      total += String(digit);
      return total;
    }, '');
  
  return parseInt(sequence);
}

function constructDescending(number) {
  if (number < 100) {
    return false;
  }
  
  const string = String(number);
  const startDigit = parseInt(string[0]);
  
  const sequence = [...new Array(startDigit + 1).keys()]
    .reverse()
    .slice(0, string.length)
    .reduce((total, digit) => {
      digit = digit >= 10 ? digit %= 10 : digit;
      total += String(digit);
      return total;
    }, '');
  
  return parseInt(sequence);
}

function constructPalindrome(number) {
  if (number < 100) {
    return false;
  }
  
  return parseInt(String(number).split('').reverse().join(''));
}