let arr = prompt("Enter numbers separated by spaces:").split(" ").map(Number);

for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
console.log("Sorted array:", arr);
