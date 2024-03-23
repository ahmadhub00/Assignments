function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

console.log("GCD:", gcd(a, b));
