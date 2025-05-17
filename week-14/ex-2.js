function reverseString(text) {
   //Start Coding Here
   let reverseString = ""
   for (let i = 0; i < text.length; i++) {
    reverseString += text[text.length-1-i]
    
    
   }
   return reverseString
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"