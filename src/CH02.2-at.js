function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}

console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));
