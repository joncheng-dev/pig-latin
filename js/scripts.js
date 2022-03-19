// Utility logic

// Business logic
function pigLatin(word) {
  let firstCharRemoved = word;
  let translatedWord = "";
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

function findFirstConsonants(word) {
  let firstConsonants = "";
  let consonantsRemoved = "";
  let translatedWord = "";
  let indexLocation = 0;
  // Loop through the word
  for (let i = 0; i < word.length; i++) {
    // Checks to see if it's a vowel.
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      // Stops saving letters when hits a vowel.
      if (word[i - 1] === "q" && word[i] === "u") {
        console.log("We have -- qu");
        console.log("String before vowel found: " + firstConsonants);
      }
      break;
    }
    // Saves letters if it is a consonant.
    firstConsonants = firstConsonants.concat(word[i]);
    indexLocation++;
    console.log("Index Loc. ending first consonants: " + indexLocation);
  }
  // Checks to see if there's a q followed by u.

  consonantsRemoved = word.substring(indexLocation - 1);
  console.log("Word with consonants removed: " + consonantsRemoved);
  translatedWord = consonantsRemoved.concat(
    word.substring(0, indexLocation - 1)
  );
  console.log("Translated word: Consonants moved to end: " + translatedWord);
}

// Function added all up.
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
    translatedWord = word.substring(indexLocation);
    console.log("Word w/o front consonants: " + translatedWord);
    translatedWord = translatedWord.concat(firstConsonants);
    console.log("Word with consonants at end: " + translatedWord);
    // Attach "ay" to the end of this word to complete RULE 2.
    translatedWord = translatedWord.concat("ay");
    console.log("Final word translated: " + translatedWord);
  }
}
// User Interface logic
