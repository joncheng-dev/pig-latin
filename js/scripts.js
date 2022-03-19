// Utility logic

// Business logic
// Function that converts a word to Pig Latin.
function pigLatin(word) {
  let translatedWord = "";
  let indexLocation = 0;
  // RULE 1: Checking if first character is a vowel.
  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    // RULE 1: If first char is a vowel, add "way" to the end. Return to user.
    translatedWord = word.concat("way");
    return translatedWord;
  } else {
    // RULE 2: First character is not a vowel. Find when consonants end.
    // Collect consonants.
    let firstConsonants = word[0];
    // Loop through the word
    for (let i = 1; i < word.length; i++) {
      indexLocation++;
      // Checks to see if it's a vowel.
      if (
        word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u"
      ) {
        // Stops saving letters when hits a vowel.
        break;
      }
      // Saves letters if it is a consonant.
      firstConsonants = firstConsonants.concat(word[i]);
    }
    console.log("Consonants so far: " + firstConsonants);
    console.log("Index Loc. of first vowel: " + indexLocation);
    // Front consonants saved. Delete & add to end of word.
    if (firstConsonants === word) {
      translatedWord = word;
      // Attach "ay" to the end of this word to complete RULE 2.
      translatedWord = translatedWord.concat("ay");
    } else {
      translatedWord = word.substring(indexLocation);
      translatedWord = translatedWord.concat(firstConsonants);
      // Attach "ay" to the end of this word to complete RULE 2.
      translatedWord = translatedWord.concat("ay");
    }
    return translatedWord;
  }
}
// User Interface logic
