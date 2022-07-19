function recoverSecret(triplets) {
  const letters = getLettersArray(triplets);
  const firstLetter = getFirstLetter(letters);
  
  if (firstLetter == '') {
    return '';
  }
  
  const newTriplets = constructNewTripletsArray(triplets, firstLetter);
  
  return firstLetter + recoverSecret(newTriplets);
}

function getLettersArray(triplets) {
  return triplets.reduce((letters, triplet) => {
    letters[0].push(triplet[0]);
    letters[1].push(triplet[1], triplet[2]);

    return letters;
  }, [[], []]);
}

function getFirstLetter(letters) {
  return [...new Set(letters[0].filter(letter => !letters[1].includes(letter)))].join('');
}

function constructNewTripletsArray(triplets, firstLetter) {
  return triplets.map(triplet => triplet[0] == firstLetter ? [triplet[1], triplet[2], ''] : triplet);
}