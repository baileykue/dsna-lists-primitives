function letterOrder(word) {
  return word.split('').sort().join('');
}

function anagrams(wordOne, wordTwo) {
  return letterOrder(wordOne) === letterOrder(wordTwo) ? true : false;
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));
