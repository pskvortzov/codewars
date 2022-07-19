function permutations(string) {
  if (string.length <= 1) {
    return [string];
  }
  
  let result = [];
  let letters = [...string];

  letters.forEach(letter => {
    let otherLetters = [...string];
    otherLetters.splice(otherLetters.indexOf(letter), 1);
    
    result.push(permutations(otherLetters.join('')).map(m => letter + m));
  });

  return [...new Set([].concat(...result))];
}