function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

let arr = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
let target = parseInt(prompt("Enter target number:"));
console.log("Index:", linearSearch(arr, target));
