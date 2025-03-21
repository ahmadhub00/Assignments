function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    let middle = arr.filter(x => x === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

let arr = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
console.log("Sorted array:", quickSort(arr));
