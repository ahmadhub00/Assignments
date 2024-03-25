let arr = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
let seen = new Set();
let duplicates = new Set();

arr.forEach(num => {
    if (seen.has(num)) duplicates.add(num);
    seen.add(num);
});

console.log("Duplicates:", [...duplicates]);
