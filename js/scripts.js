// buisness logic

function pigLatin(text) {
  const vowel = ["a", "e", "i", "o", "u"];
  // prettier-ignore
  const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  let textArray = text.split("");
  for (let i = 0; i < vowel.length; i++) {
    console.log("loop");
    if (text.charAt(0).toLowerCase() === vowel[i]) {
      return text.concat("way");
    } else {
      for (let x = 0; x < textArray.length; x++) {
        if (vowel[i] === textArray[x]) {
          debugger;
          let untilVowel = text.slice(0, [x]);
          return text.slice(x).concat(untilVowel);
        }
      }
    }
  }
}
// for (let i = 0; i < textArray.length; i++) {
//   if (textArray.includes(vowel[i])) {
//     debugger;
//     let untilVowel = text.slice(0, [i]);
//     return text.slice(0, i).concat(untilVowel);
//   }
// }
