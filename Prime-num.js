let num = parseInt(prompt("Enter a number:"));
let isPrime = num > 1;

for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime" : "Not Prime");
