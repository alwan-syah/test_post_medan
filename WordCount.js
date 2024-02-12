function countWords(input) {
  input = input.toLowerCase();
  let wordCount = {};

  for (let i = 0; i < input.length; i++) {
    let charPresent = input.charAt(i);

    if (/[a-z]/.test(charPresent)) {
      wordCount[charPresent] = (wordCount[charPresent] || 0) + 1;
    }
  }

  let result = "";

  for (let char in wordCount) {
    result += ` ${char}=${wordCount[char]},`;
  }

  if (result.length > 2) {
    result = result.slice(0, -2);
  }

  

  return result;
}

let example1 = "We Always Mekar";
let example2 = "coding is fun";

console.log(countWords(example1));
console.log(countWords(example2));
