let str = prompt("Enter a string:");
console.log("Vowel count:", (str.match(/[aeiou]/gi) || []).length);
