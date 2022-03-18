// Utility logic

// Business logic
function pigLatin(word) {
  let firstCharRemoved = word;
  let translatedWord;
  // if (
  //   word[0] === "a" ||
  //   word[0] === "e" ||
  //   word[0] === "i" ||
  //   word[0] === "o" ||
  //   word[0] === "u"
  // ) {
  // Remove character from the string.
  firstCharRemoved = word.slice(1);
  console.log("After removing the first character: " + firstCharRemoved);
  // Concatenate this character to the end.
  translatedWord = firstCharRemoved.concat(word[0]);
  console.log("After attaching first char. to end: " + translatedWord);
  return true;
  // } else {
  //   return false;
  // }
}

// User Interface logic
