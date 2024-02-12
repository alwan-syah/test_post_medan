function SortingWords(words) {
  let wordCount = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      let charPresent = word.charAt(j).toLowerCase();

      if (/[a-z]/.test(charPresent)) {
        wordCount[charPresent] = (wordCount[charPresent] || 0) + 1;
      }
    }
  }

  let sortedWords = Object.keys(wordCount).sort((a, b) => {
    if (wordCount[b] === wordCount[a]) {
      return b.localeCompare(a);
    } else {
      return wordCount[b] - wordCount[a];
    }
  });

  let result = sortedWords.join("");

  return result;
}

let task1 = ["Abc", "bCd"];
let task2 = ["Oke", "One"];
let task3 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];

console.log(SortingWords(task1));
console.log(SortingWords(task2));
console.log(SortingWords(task3));
