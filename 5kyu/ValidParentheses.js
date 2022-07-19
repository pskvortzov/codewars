function validParentheses(parens) {
  if (parens == "") {
    return true;
  }
  
  if (!parens.includes("()")) {
    return false;
  }
  
  return validParentheses(parens.replace('()', ''));
}