Describe: pigLatin()

Test: "It will take a character, check if it is a letter 'a', and return true if yes, and return false if not."
Code: pigLatin("a");
Expected Output: true;

Test: "It will take a character, check if it is 'a', 'e', 'i', 'o', or 'u', and return true if yes, and return false if not."
Code: pigLatin("b");
Expected Output: false;

Test: "It will take a word, check if its first character is a vowel, and return true if yes, and return false if not."
Code: pigLatin("word");
Expected Output: false;

Test: "It will take a word, and take the first character to the end of the word."
Code: pigLatin("code");
Expected Output: "odec";

Test: "It will take a word, check if the first character is a vowel. If it is a vowel, it will add 'way' to the end."
Code: pigLatin("air");
Expected Output: "airway";

Test: "It will take a word, check if the first character is a vowel. If it is not a vowel, move this character to the end of the word."
Code: pigLatin("bay");
Expected Output: "ayb";

Test: "It will take a word, and move the first two characters to the end."
Code: pigLatin("word");
Expected Output: "rdwo";

Test: "It will take a word, and loop through the word one character at a time, remembering all consonants before a vowel is reached."
Code: pigLatin("character");
Expected Output: "ch";

Test: "It will take a word, and loop through the word one character at a time, deleting all consonants before a vowel is reached, then reattaching those consonants at the end of the word."
Code: pigLatin("character");
Expected Output: "aracterch";

Test: "It will take a word, and loop through the word one character at a time, deleting all consonants before a vowel is reached, then reattaching those consonants at the end of the word, along with 'ay'. -- Specific case, where the vowel is on the last character."
Code: pigLatin("qwyrte");
Expected Output: "eqwyrtay" --> (e + qwyrt + ay);

Test: "It will take a word, and loop through the word one character at a time, deleting all consonants before a vowel is reached, then reattaching those consonants at the end of the word, along with 'ay'. -- Specific case, where there is no vowel."
Code: pigLatin("qwyrty");
Expected Output: "qwyrtyay" --> ( + qwyrty + ay);

Test: "It will take a word, and loop through the word one character at a time, remembering the consonants before a vowel is reached. Among these consonants, if there is a 'q', check if the character following the 'q' is a 'u'.
Code: pigLatin("squeal");
Expected Output: true;

Test: "It will take a word, and loop through the word one character at a time, remembering the consonants before a vowel is reached. Among these consonants, if there is a 'q', check if the character following the 'q' is a 'u'. If so, delete 'qu' from the front. Add 'qu' to the end of the word."
Code: pigLatin("quick");
Expected Output: "ickqu";
