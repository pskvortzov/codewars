function spinWords(string) {
  return string.split(' ')
    .map(word => word.length >= 5 ? reverseWord(word) : word)
    .join(' ');
}

function reverseWord(word) {
  return [...word].reverse().join('');
}