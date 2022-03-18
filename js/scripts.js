// Utility logic

// Business logic
function pigLatin(word) {
  let firstCharRemoved = word;
  let translatedWord;
  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    translatedWord = word.concat("way");
    return translatedWord;
  } else {
    // Remove character from the string.
    firstCharRemoved = word.substring(1);
    console.log("After removing the first character: " + firstCharRemoved);
    // Concatenate this character to the end.
    translatedWord = firstCharRemoved.concat(word[0]);
    console.log("After attaching first char. to end: " + translatedWord);
    return translatedWord;
  }
}

function moveTwoChars(word) {
  let twoCharsRemoved = word;
  let translatedWord;
  twoCharsRemoved = word.substring(2);
  console.log("After removing first 2 chars: " + twoCharsRemoved);
  // Add these two characters to the end of the word.
  translatedWord = twoCharsRemoved.concat(word.substring(0, 2));
  console.log("After attaching 2 chars to end: " + translatedWord);
}

// User Interface logic
