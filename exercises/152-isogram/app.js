function isIsogram(text) {
  // your code here
  return !text.match(/([a-z]).*\1/i);
}

console.log(isIsogram("camilec")); // --> true
console.log(isIsogram("Camille")); // --> false
