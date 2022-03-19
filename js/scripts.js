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
  }
  // EXCEPTION: If first char is a "q", and following vowel a "u"..
  else if (word[0] === "q" && word[1] === "u") {
    let moveQu = word.slice(0, 2);
    translatedWord = word.substring(2);
    translatedWord = translatedWord.concat(moveQu + "ay");
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
    // Front consonants saved. Delete & add to end of word.
    if (firstConsonants === word) {
      translatedWord = word;
      // Attach "ay" to the end of this word to complete RULE 2.
      translatedWord = translatedWord.concat("ay");
    }
    // If the last character saved was a "q"
    else if (firstConsonants.charAt(firstConsonants.length - 1) === "q") {
      firstConsonants = firstConsonants.slice(0, -1);
      // Move this to the back of the word -- firstConsonants.
      translatedWord = word.substring(indexLocation - 1);
      translatedWord = translatedWord.concat(firstConsonants + "ay");
      return translatedWord;
    } else {
      translatedWord = word.substring(indexLocation);
      // Attach "ay" to the end of this word to complete RULE 2.
      translatedWord = translatedWord.concat(firstConsonants + "ay");
    }
    return translatedWord;
  }
}

// User Interface logic
