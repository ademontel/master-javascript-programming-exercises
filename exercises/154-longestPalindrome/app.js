function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = '';

  for (let i = 0; i < sentence.length; i++) {
    let word = '';
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];
      if (isPalindrome(word) && word.length > longestPalindrome.length) longestPalindrome = word
    }
  }
return longestPalindrome;
}

function reverseString(string) {
  // your code here
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function isPalindrome(word) {
  // your code here
  
    if(word.toLowerCase()==reverseString(word.toLowerCase())){
      return true;
    } else return false;
}
  

let output = findLongestPalindrome("Madam, i'm adam");
console.log(output); // --> "a racecar a"
