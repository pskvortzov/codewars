function generateHashtag (str) {
  const tag = '#' + str.split(' ')
    .map(i => i.substr(0,1).toUpperCase() + i.substr(1))
    .join('');
  
  if (tag.length > 140 || tag.length == 1) {
    return false;
  }
  
  return tag;
}