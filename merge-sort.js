function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        sortedArray.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...sortedArray, ...left, ...right];
}

let arr = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
console.log("Sorted array:", mergeSort(arr));

