function uniqueChar(string) {
  const stringArr = string.split('').sort();

  for (let i = 0; i < stringArr.length; i++) {
    current = stringArr[i];
    prev = stringArr[i - 1];
    next = stringArr[i + 1];
    if (current !== prev && current !== next) {
      return current;
    }
  }
  return '_';
}

console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabad'));
