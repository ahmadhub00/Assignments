let str = prompt("Enter a string:");
console.log(str === str.split('').reverse().join('') ? "Palindrome" : "Not Palindrome");
