function solution(list) {
  let range = [];
  const resultArray = [];
  
  for (let i = 0; i < list.length; i++) {
    range.push(list[i]);

    if (list[i + 1] - list[i] != 1) {
        if (range.length >= 3) {
            resultArray.push([range[0], range[range.length - 1]]);
        } else {
            resultArray.push(...range);
        }
        range = [];
    }
  }
  
  return resultArray
    .map(item => typeof item == 'object' ? item.join('-') : item)
    .join(',');
}