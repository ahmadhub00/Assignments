function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

let num = parseInt(prompt("Enter a number:"));
console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);
