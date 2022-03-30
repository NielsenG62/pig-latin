```javascript
Describe: pigLatin();

Test: "It will add 'way' to the end of the word 'a'."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a capitilized vowel"
Code: pigLatin("A");
Expected Output:  "Away"

Test: "It will add 'way' to the end of words that begin with any vowel"
code: pigLatin("a", "e", "i", "o", "u")
expected output: "away", "eway", "iway", "oway", "uway"

Test: "It will only read the first letter of a word when it's a vowel"
code: pigLatin("after")
expected output: "afterway"

Test: "It will take the first letter, if it's a consonant and move it to the end of the word"
code: pigLatin ("code")
expected Output: "odec"

Test: "It will move all consonants before the first vowel to the end of the word"
code: pigLatin ("start")
expected Output: "artst"

Test: "It will move q and u together if q is the first consonant"
code: pigLatin ("quick")
expected Output: "ickqu"

Test: "it will add ay to the end of word that starts with a consonant after moving the consonants"
code: pigLatin ("start")
expected Output: "artstay"

Test: "It will make pig latin out of multiple words"
code: ("hello world")
expected Output: "ellohay orldway"


```
