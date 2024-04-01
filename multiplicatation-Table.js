let num = parseInt(prompt("Enter a number for multiplication table:"));
let range = parseInt(prompt("Enter range:"));

for (let i = 1; i <= range; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
