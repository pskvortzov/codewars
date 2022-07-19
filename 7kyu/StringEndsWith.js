function solution(str, ending) {
  return str.substr(-ending.length, ending.length) == ending;
}
