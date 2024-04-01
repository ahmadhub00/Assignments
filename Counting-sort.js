function countingSort(arr) {
    let max = Math.max(...arr);
    let count = Array(max + 1).fill(0);

    for (let num of arr) count[num]++;

    let sortedArray = [];
    for (let i = 0; i <= max; i++) {
        while (count[i]-- > 0) sortedArray.push(i);
    }
    return sortedArray;
}

let arr = prompt("Enter non-negative numbers separated by spaces:").split(" ").map(Number);
console.log("Sorted array:", countingSort(arr));
