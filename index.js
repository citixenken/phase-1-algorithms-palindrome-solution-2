function isPalindrome(word) {
  // Write your algorithm here
  for (startIndex = 0; startIndex < word.length / 2; startIndex++) {
    let endIndex = word.length - 1 - startIndex;
    let startChar = word[startIndex];
    let endChar = word[endIndex];

    if (startChar !== endChar) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  ========================

  racecar
  0123456
  x     y
   x   y
    x y
  iterate from beginning to middle of word
    check each letter from start to corresponding letter from the end
      if letters don't match
        return false

  return true

*/

/*
  Add written explanation of your solution here
  =============================================
  1. Make a function that returns true if provided word is same as reversed word.
    1st letter should be equal to last letter; 2nd letter should be equal to 2nd last letter etc...until 
    we reach the middle of the string.

    test case
    =========
    beer
    ^  ^
      false

    kayak
    ^   ^
     ^ ^
      ^
      true

    repaper
    ^     ^
     ^   ^
      ^ ^
       ^
       true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
