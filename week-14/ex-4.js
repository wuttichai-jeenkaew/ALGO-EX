function isPalindrome(word) {
  //Start Coding Here
  let wordNormal = "";
  let reverseWord = "";
  for (let i = 0; i < word.length; i++) {
    wordNormal += word[i];
    reverseWord += word[word.length - i - 1];
  }

  return wordNormal === reverseWord
}

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
